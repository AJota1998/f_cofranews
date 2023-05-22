import { TestBed } from '@angular/core/testing';

import { PrivateTaskService } from './private-task.service';

describe('PrivateTaskService', () => {
  let service: PrivateTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
