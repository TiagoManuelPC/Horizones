import { Component, input, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrl: './text-input.component.scss'
})
export class TextInputComponent implements ControlValueAccessor {
    @Input() type = 'text';
    @Input() label = '';

    constructor(@Self() public contreolDir: NgControl) {
        this.contreolDir.valueAccessor = this;
    }

    writeValue(obj: any): void {
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    get control(): FormControl {         
        return this.contreolDir.control as FormControl;
    }
}
