import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiSanPhamAdminComponent } from './loai-san-pham-admin.component';

describe('LoaiSanPhamAdminComponent', () => {
  let component: LoaiSanPhamAdminComponent;
  let fixture: ComponentFixture<LoaiSanPhamAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiSanPhamAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiSanPhamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
