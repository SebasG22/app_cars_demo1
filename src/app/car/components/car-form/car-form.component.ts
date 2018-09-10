import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as carActions from '../../actions/car.actions';
import * as carSelectors from '../../reducers/car.reducer';
import { Subscription } from 'rxjs';
import { Car } from '../../models';
import { carModels } from '../../config';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  public form: FormGroup;

  private carSelected$: Subscription;
  private carSelected: Car;

  public carModels = carModels;

  constructor(
    private fb: FormBuilder,
    private store: Store<{}>,
    private routerParams: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cleanStore();
    this.listenCarSelected();
    this.buildForm();
    this.getRouterParameters();
  }

  public cleanStore() {
    this.store.dispatch(new carActions.GetCarSuccess(null));
  }

  public getRouterParameters() {
    this.routerParams.params.subscribe((params) => {
      if (params['id']) {
        this.store.dispatch(new carActions.GetCar(params['id']));
      }
    });

  }

  public listenCarSelected() {
    this.carSelected$ = this.store.select(carSelectors.getSelectedCar)
    .subscribe((data) => {
      if (data) {
        this.carSelected = data;
        this.patchForm(data);
      }
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      id: [''],
      plate: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      model: ['', Validators.required],
      year: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])]
    });
  }

  private patchForm(data) {
    this.form.patchValue(data);
  }

  private onSubmitForm({valid, value}: { valid: boolean, value: any}) {
    if (valid) {
      if (this.carSelected) {
        this.store.dispatch( new carActions.UpdateCar(value));
      } else {
        this.store.dispatch( new carActions.CreateCar(value));
      }
      this.router.navigate(['']);
    } else {
    this.toastr.error('Error', 'The form is invalid');
    }
  }

}
