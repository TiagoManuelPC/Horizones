import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { GridTestComponent } from './core/grid-test/grid-test.component';


const routes: Routes = [
    { path: '', component: HomeComponent, data: {breadcrumb: 'Home'} },
    { path: 'test-error', component: TestErrorComponent},
    { path: 'grid-test', component: GridTestComponent},
    { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
