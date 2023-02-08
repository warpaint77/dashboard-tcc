import { TestBed } from '@angular/core/testing';

import { ExampleToolService } from './example-tool.service';

describe('ExampleToolService', () => {
  let service: ExampleToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
