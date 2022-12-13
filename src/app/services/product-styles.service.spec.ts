import { TestBed } from '@angular/core/testing';

import { ProductStylesService } from './product-styles.service';

describe('ProductStylesService', () => {
  let service: ProductStylesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStylesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
