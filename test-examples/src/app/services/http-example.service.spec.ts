import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpExampleService } from './http-example.service';

describe('HttpExampleService', () => {
  let service: HttpExampleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list all people', () => {
    const mockData = [ { name: 'Daniel', date: '2021-11-17T23:58:09.680Z' } ]
    service.getAll().subscribe(people => {
      expect(people[0].date.toISOString()).toEqual('2021-11-17T23:58:09.680Z');
      expect(people[0].name).toEqual('Daniel');
    })
    const req = httpTestingController.expectOne('/people');
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });


});
