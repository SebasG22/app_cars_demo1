import { Injectable } from '@angular/core';
import { Car } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const env = environment;

@Injectable()
export class CarService {

    private backend_service = 'cars/';

    constructor(private http: HttpClient) {}

    public createCar(car: Car): Observable<any> {
        return this.http.post(`${env.spring_backend}${this.backend_service}`, car);
    }

    public getCar(id: string): Observable<Car> {
        return this.http.get<Car>(`${env.spring_backend}${this.backend_service}${id}`);
    }

    public getAllCars(): Observable<Car[]> {
        return this.http.get<Car[]>(`${env.spring_backend}${this.backend_service}`);
    }

    public updateCar(car: Car): Observable<Car> {
        return this.http.patch<Car>(`${env.spring_backend}${this.backend_service}${car.id}`, car);
    }

    public deleteCar(id: string): Observable<any> {
        return this.http.delete(`${env.spring_backend}${this.backend_service}${id}`);
    }
}
