import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [ LoadingModalComponent],
    imports: [ CommonModule, MaterialModule ],
    exports: [],
    entryComponents: [ LoadingModalComponent ]
})
export class SharedModule {}
