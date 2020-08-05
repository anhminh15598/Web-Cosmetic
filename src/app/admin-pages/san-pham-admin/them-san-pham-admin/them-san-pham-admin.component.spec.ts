import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSanPhamAdminComponent } from './them-san-pham-admin.component';

describe('ThemSanPhamAdminComponent', () => {
  let component: ThemSanPhamAdminComponent;
  let fixture: ComponentFixture<ThemSanPhamAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemSanPhamAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSanPhamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
