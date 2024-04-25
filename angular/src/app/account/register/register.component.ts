import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { debounceTime, finalize, map, switchMap, take } from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
    errors: string[] | null = null;
    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService) {

    }

    complexPassword = "(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$";
    registerForm = this.formBuilder.group({
        displayName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email], [this.validateEmailNotTaken()]],
        password: ['', [Validators.required, Validators.pattern(this.complexPassword)]]
    });

    onSubmit() {
        this.accountService.register(this.registerForm.value).subscribe({
            next: () => {
                this.router.navigateByUrl("/shop")
                console.log('i submited')
            },
            error: error => {
                this.errors = error.errors;
                console.log("error", error)
            }
        });
    }

    validateEmailNotTaken(): AsyncValidatorFn {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(
                debounceTime(1000),
                take(1),
                switchMap(() => {
                    return this.accountService.checkEmailExists(control.value).pipe(
                        map(result => result ? { emailExists: true } : null),
                        finalize(() => control.markAllAsTouched())
                    );
                })
            )
        };
    }
}
