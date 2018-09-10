import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { SERVICES } from './services';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/car.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './effects';
import { CarRoutingModule } from './car.router';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [COMPONENTS, PAGES],
  imports: [
    CommonModule,
    HttpClientModule,
    CarRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('carFeatureModel', { carState: reducer }),
    EffectsModule.forFeature(EFFECTS)
  ],
  exports: [],
  providers: [SERVICES]
})
export class CarModule {}
