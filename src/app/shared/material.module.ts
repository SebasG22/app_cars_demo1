import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

export const MATERIAL_MODULES = [
    MatButtonModule,
    MatCheckboxModule
];

@NgModule({
    imports: [ MATERIAL_MODULES ],
    exports: [ MATERIAL_MODULES ],
})
export class MaterialModule {}
