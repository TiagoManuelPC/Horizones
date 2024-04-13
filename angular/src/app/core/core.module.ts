import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TestErrorComponent } from './test-error/test-error.component';
import { GridTestComponent } from './grid-test/grid-test.component';
import { AgGridModule } from 'ag-grid-angular';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    TestErrorComponent,
    GridTestComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    AgGridModule,
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
    })
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerModule,
  ]
})
export class CoreModule { }
