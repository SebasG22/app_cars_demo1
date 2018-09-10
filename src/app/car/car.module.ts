import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { SERVICES } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        COMPONENTS,
        PAGES
    ],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [
        SERVICES
    ],
})
export class CarModule {}
