import { Action } from '@ngrx/store';
import { Car } from '../models';

export const CREATE_CAR = '[ CAR ] - create car';
export const CREATE_CAR_SUCCESS = '[ CAR ] - create car success';
export const CREATE_CAR_FAILED = '[ CAR ] - create car failed';
export const GET_CAR = '[ CAR ] - Get car';
export const GET_CAR_SUCCESS = '[ CAR ] - Get car success';
export const GET_CAR_FAILED = '[ CAR ] - Get car failed';
export const GET_ALL_CARS = '[ CAR ] - Get all cars';
export const GET_ALL_CARS_SUCCESS = '[ CAR ] - Get all cars success';
export const GET_ALL_CARS_FAILED = '[ CAR ] - Get all cars failed';
export const UPDATE_CAR = '[ CAR - Update car]';
export const UPDATE_CAR_SUCCESS = '[ CAR - Update car success]';
export const UPDATE_CAR_FAILED = '[ CAR - Update car failed]';
export const DELETE_CAR = '[ CAR ] - Delete car';
export const DELETE_CAR_SUCCESS = '[ CAR ] - Delete car success';
export const DELETE_CAR_FAILED = '[ CAR ] - Delete car failed';

export class CreateCar implements Action {
    readonly type = CREATE_CAR;
    public constructor (public payload: Car) {}
}

export class CreateCarSuccess implements Action {
    readonly type = CREATE_CAR_SUCCESS;
    public constructor (public payload: any = null) {}
}

export class CreateCarFailed implements Action {
    readonly type = CREATE_CAR_FAILED;
    public constructor (public payload = null) {}
}

export class GetCar implements Action {
    readonly type = GET_CAR;
    public constructor (public payload: string) {}
}

export class GetCarSuccess implements Action {
    readonly type = GET_CAR_SUCCESS;
    public constructor (public payload: Car) {}
}

export class GetCarFailed implements Action {
    readonly type = GET_CAR_FAILED;
    public constructor (public payload: any = null) {}
}

export class GetAllCars implements Action {
    readonly type = GET_ALL_CARS;
    public constructor (public payload: any = null) {}
}

export class GetAllCarsSuccess implements Action {
    readonly type = GET_ALL_CARS_SUCCESS;
    public constructor (public payload: Car[]) {}
}

export class GetAllCarsFailed implements Action {
    readonly type = GET_ALL_CARS_FAILED;
    public constructor (public payload: any = null) {}
}

export class UpdateCar implements Action {
    readonly type = UPDATE_CAR;
    public constructor(public payload: Car) {}
}

export class UpdateCarSuccess implements Action {
    readonly type = UPDATE_CAR_SUCCESS;
    public constructor(public payload: any = null) {}
}

export class UpdateCarFailed implements Action {
    readonly type = UPDATE_CAR_FAILED;
    public constructor(public payload: any = null) {}
}

export class DeleteCar implements Action {
    readonly type = DELETE_CAR;
    public constructor (public payload: string) {}
}

export class DeleteCarSuccess implements Action {
    readonly type = DELETE_CAR_SUCCESS;
    public constructor (public payload: any = null) {}
}

export class DeleteCarFailed implements Action {
    readonly type = DELETE_CAR_FAILED;
    public constructor (public payload: any = null) {}
}

export type All =
        CreateCar |
        CreateCarSuccess |
        CreateCarFailed |
        GetCar |
        GetCarSuccess |
        GetCarFailed |
        GetAllCars |
        GetAllCarsSuccess |
        GetAllCarsFailed |
        UpdateCar |
        UpdateCarSuccess |
        UpdateCarFailed |
        DeleteCar |
        DeleteCarSuccess |
        DeleteCarFailed;


