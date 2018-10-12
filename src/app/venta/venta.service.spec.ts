import { TestBed } from '@angular/core/testing';

import { VentaService } from './venta.service';

describe('VentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaService = TestBed.get(VentaService);
    expect(service).toBeTruthy();
  });
});
