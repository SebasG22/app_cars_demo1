import * as carActions from '../actions/car.actions';
import { Car } from '../models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Actions = carActions.All;

export interface CarFeatureModel {
    carState: State;
}

export interface State {
  all_cars: Car[];
  car_selected: Car;
  loading: boolean;
}

const initialState: State = {
  all_cars: null,
  car_selected: null,
  loading: false
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case carActions.CREATE_CAR:
    case carActions.GET_CAR:
    case carActions.GET_ALL_CARS:
    case carActions.UPDATE_CAR:
    case carActions.DELETE_CAR:
        return { ...state, loading: true};
    case carActions.GET_CAR_SUCCESS:
        return { ...state, car_selected: action.payload, loading: false };
    case carActions.GET_ALL_CARS_SUCCESS:
        return { ...state, all_cars: action.payload, loading: false };
    case carActions.CREATE_CAR_SUCCESS:
    case carActions.CREATE_CAR_FAILED:
    case carActions.GET_CAR_FAILED:
    case carActions.GET_ALL_CARS_FAILED:
    case carActions.UPDATE_CAR_SUCCESS:
    case carActions.UPDATE_CAR_FAILED:
    case carActions.DELETE_CAR_SUCCESS:
    case carActions.DELETE_CAR_FAILED:
    return { ...state, loading: false };
    default:
      return state;
  }
}

 export const selectCarFeatureModel = createFeatureSelector<CarFeatureModel>('carFeatureModel');
 export const getCarState = createSelector(selectCarFeatureModel, (state: CarFeatureModel ) => state.carState);
 export const getAllCars = createSelector(getCarState, (state: State) => state.all_cars);
 export const getSelectedCar = createSelector(getCarState, (state: State) => state.car_selected);
 export const getLoading = createSelector(getCarState, (state: State) => state.loading);

