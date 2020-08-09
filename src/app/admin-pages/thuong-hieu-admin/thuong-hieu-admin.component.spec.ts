import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuongHieuAdminComponent } from './thuong-hieu-admin.component';

describe('ThuongHieuAdminComponent', () => {
  let component: ThuongHieuAdminComponent;
  let fixture: ComponentFixture<ThuongHieuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuongHieuAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuongHieuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
