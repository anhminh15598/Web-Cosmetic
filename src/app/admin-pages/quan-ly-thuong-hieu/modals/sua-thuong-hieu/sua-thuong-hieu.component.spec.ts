/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuaThuongHieuComponent } from './sua-thuong-hieu.component';

describe('SuaThuongHieuComponent', () => {
  let component: SuaThuongHieuComponent;
  let fixture: ComponentFixture<SuaThuongHieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaThuongHieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaThuongHieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
