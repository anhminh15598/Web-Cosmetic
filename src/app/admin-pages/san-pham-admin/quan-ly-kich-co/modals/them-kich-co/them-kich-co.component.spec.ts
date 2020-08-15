/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThemKichCoComponent } from './them-kich-co.component';

describe('ThemKichCoComponent', () => {
  let component: ThemKichCoComponent;
  let fixture: ComponentFixture<ThemKichCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemKichCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemKichCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
