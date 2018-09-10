import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarListPage } from './pages/car-list/car-list.page';
import { CarEditPage } from './pages/car-edit/car-edit.page';

const routes: Routes = [
    { path: '', component: CarListPage, pathMatch: 'full' },
    { path: 'car-edit/:id', component: CarEditPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarRoutingModule {}
