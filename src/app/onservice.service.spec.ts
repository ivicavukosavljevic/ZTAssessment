import { TestBed } from '@angular/core/testing';

import { OnserviceService } from './onservice.service';

describe('OnserviceService', () => {
  let service: OnserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
