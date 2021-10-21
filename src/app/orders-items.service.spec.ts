import { TestBed } from '@angular/core/testing';

import { OrdersItemsService } from './orders-items.service';

describe('OrdersItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersItemsService = TestBed.get(OrdersItemsService);
    expect(service).toBeTruthy();
  });
});
