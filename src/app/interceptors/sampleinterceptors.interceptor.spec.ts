import { TestBed } from '@angular/core/testing';

import { SampleinterceptorsInterceptor } from './sampleinterceptors.interceptor';

describe('SampleinterceptorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SampleinterceptorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SampleinterceptorsInterceptor = TestBed.inject(SampleinterceptorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
