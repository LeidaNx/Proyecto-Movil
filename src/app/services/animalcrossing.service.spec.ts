import { TestBed } from '@angular/core/testing';

import { AnimalcrossingService } from './animalcrossing.service';

describe('AnimalcrossingService', () => {
  let service: AnimalcrossingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalcrossingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
