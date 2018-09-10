import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as carActions from '../../actions/car.actions';
import { getAllCars } from '../../reducers/car.reducer';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'plate', 'model', 'year', 'delete'];
  public dataSource$;
  constructor(
    private store: Store<{}>
  ) { }

  ngOnInit() {
    this.getDataSource();
  }

  private getDataSource() {
    this.store.dispatch(new carActions.GetAllCars());
    this.dataSource$ = this.store.select(getAllCars);
  }

  public deleteCar(id: string) {
    this.store.dispatch(new carActions.DeleteCar(id));
  }

}
