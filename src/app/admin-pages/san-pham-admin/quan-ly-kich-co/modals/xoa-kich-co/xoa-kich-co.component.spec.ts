/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XoaKichCoComponent } from './xoa-kich-co.component';

describe('XoaKichCoComponent', () => {
  let component: XoaKichCoComponent;
  let fixture: ComponentFixture<XoaKichCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaKichCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaKichCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
