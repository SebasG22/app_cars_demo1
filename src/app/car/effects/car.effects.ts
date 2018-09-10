import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as carActions from '../actions/car.actions';
import { CarService } from '../services/car.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Car } from '../models';

@Injectable()
export class CarEffects {

    @Effect()
    public createCar$: Observable<Action> = this.actions$
    .ofType(carActions.CREATE_CAR)
    .pipe(
        map((action: any) => action.payload),
        switchMap((payload: Car) => this.carService.createCar(payload)),
        map(() => new carActions.CreateCarSuccess() ),
        catchError((error) => of(new carActions.CreateCarFailed(error)) )
    );

   @Effect( { dispatch: false})
   public createCarSuccess$ = this.actions$
   .ofType(carActions.CREATE_CAR_SUCCESS)
   .pipe(map(() => {
        console.warn('The car was created correctly');
   }));

   @Effect( { dispatch: false})
   public createCarFailed$ = this.actions$
   .ofType(carActions.CREATE_CAR_FAILED)
   .pipe(
       map((action: any) => action.payload),
       map((payload) => {
        console.error(payload);
   }));

   @Effect()
    public getCar$: Observable<Action> = this.actions$
    .ofType(carActions.GET_CAR)
    .pipe(
        map((action: any) => action.payload),
        switchMap((payload: string) => this.carService.getCar(payload)),
        map((data: Car) => new carActions.GetCarSuccess(data) ),
        catchError((error) => of(new carActions.GetCarFailed(error)) )
    );

    @Effect( { dispatch: false})
   public GetCarFailed$ = this.actions$
   .ofType(carActions.GET_CAR_FAILED)
   .pipe(
       map((action: any) => action.payload),
       map((payload) => {
        console.error(payload);
   }));

   @Effect()
    public getAllCars$: Observable<Action> = this.actions$
    .ofType(carActions.GET_ALL_CARS)
    .pipe(
        switchMap(() => this.carService.getAllCars()),
        map((data: Car[]) => new carActions.GetAllCarsSuccess(data) ),
        catchError((error) => of(new carActions.GetAllCarsFailed(error)) )
    );

    @Effect( { dispatch: false})
    public GetAllCarsFailed$ = this.actions$
    .ofType(carActions.GET_ALL_CARS_FAILED)
    .pipe(
        map((action: any) => action.payload),
        map((payload) => {
         console.error(payload);
    }));

    @Effect()
    public updateCar$: Observable<Action> = this.actions$
    .ofType(carActions.UPDATE_CAR)
    .pipe(
        map((action: any) => action.payload),
        switchMap((payload: Car) => this.carService.updateCar(payload)),
        map((data: Car) => new carActions.UpdateCarSuccess(data) ),
        catchError((error) => of(new carActions.UpdateCarFailed(error)) )
    );

    @Effect( { dispatch: false})
   public UpdateCarFailed$ = this.actions$
   .ofType(carActions.GET_CAR_FAILED)
   .pipe(
       map((action: any) => action.payload),
       map((payload) => {
        console.error(payload);
   }));

   @Effect()
    public deleteCar$: Observable<Action> = this.actions$
    .ofType(carActions.DELETE_CAR)
    .pipe(
        map((action: any) => action.payload),
        switchMap((payload: string) => this.carService.deleteCar(payload)),
        map((data: Car) => new carActions.DeleteCarSuccess(data) ),
        catchError((error) => of(new carActions.DeleteCarFailed(error)) )
    );

    @Effect( { dispatch: false})
   public DeleteCarFailed$ = this.actions$
   .ofType(carActions.DELETE_CAR_FAILED)
   .pipe(
       map((action: any) => action.payload),
       map((payload) => {
        console.error(payload);
   }));

    public constructor(
        private actions$: Actions,
        private carService: CarService
    ) {}
}
