import { TestBed } from '@angular/core/testing';

import { FoodItemsService } from './food-items.service';

describe('FoodItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodItemsService = TestBed.get(FoodItemsService);
    expect(service).toBeTruthy();
  });
});
