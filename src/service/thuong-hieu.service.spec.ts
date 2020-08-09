/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThuongHieuService } from './thuong-hieu.service';

describe('Service: ThuongHieu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThuongHieuService]
    });
  });

  it('should ...', inject([ThuongHieuService], (service: ThuongHieuService) => {
    expect(service).toBeTruthy();
  }));
});
