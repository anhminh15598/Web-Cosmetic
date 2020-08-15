/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuaKichCoComponent } from './sua-kich-co.component';

describe('SuaKichCoComponent', () => {
  let component: SuaKichCoComponent;
  let fixture: ComponentFixture<SuaKichCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuaKichCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaKichCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
