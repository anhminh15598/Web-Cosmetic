/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XoaThuongHieuComponent } from './xoa-thuong-hieu.component';

describe('XoaThuongHieuComponent', () => {
  let component: XoaThuongHieuComponent;
  let fixture: ComponentFixture<XoaThuongHieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaThuongHieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaThuongHieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
