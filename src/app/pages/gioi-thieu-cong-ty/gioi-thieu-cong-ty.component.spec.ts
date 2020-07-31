import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuCongTyComponent } from './gioi-thieu-cong-ty.component';

describe('GioiThieuCongTyComponent', () => {
  let component: GioiThieuCongTyComponent;
  let fixture: ComponentFixture<GioiThieuCongTyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GioiThieuCongTyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuCongTyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
