import { TestBed } from '@angular/core/testing';

import { SearchGithubService } from './search-github.service';

describe('SearchGithubService', () => {
  let service: SearchGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
