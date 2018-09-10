/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarListPage } from './car-list.page';

describe('CarListPage', () => {
  let component: CarListPage;
  let fixture: ComponentFixture<CarListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
