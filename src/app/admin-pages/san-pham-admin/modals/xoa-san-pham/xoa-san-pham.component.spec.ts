/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XoaSanPhamComponent } from './xoa-san-pham.component';

describe('XoaSanPhamComponent', () => {
  let component: XoaSanPhamComponent;
  let fixture: ComponentFixture<XoaSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoaSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoaSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
