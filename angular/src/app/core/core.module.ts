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

@NgModule({
  declarations: [
    NavBarComponent,
    SectionHeaderComponent,
    TestErrorComponent,
    GridTestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    AgGridModule
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerModule,
  ]
})
export class CoreModule { }
