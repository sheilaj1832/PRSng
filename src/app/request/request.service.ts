import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {SystemService } from '../system/system.service'
import { Request } from './request.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequests/';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
  }
  add(request: Request): Observable<JsonResponse> {
    return this.http.post(url + 'Add', request) as Observable<JsonResponse>;
  }
  change(request: Request): Observable<JsonResponse> {
    return this.http.post(url + 'Change', request) as Observable<JsonResponse>;
  }
  remove(request: Request): Observable<JsonResponse> {
    return this.http.post(url + 'Remove', request) as Observable<JsonResponse>;
  }
  submitreview(id): Observable<JsonResponse> {
    return this.http.get(url + 'SubmitForReview/' + id) as Observable<JsonResponse>;
  } 
  reviews(userid): Observable<JsonResponse> {
    return this.http.get(url + 'ListReview/' + userid) as Observable<JsonResponse>;
  }

    constructor(
      private sys: SystemService,
      private http: HttpClient
      ) { }
}
