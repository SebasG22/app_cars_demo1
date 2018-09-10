/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarEditPage } from './car-edit.page';

describe('CarEditPage', () => {
  let component: CarEditPage;
  let fixture: ComponentFixture<CarEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarEditPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
