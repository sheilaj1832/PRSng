import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Line } from './line.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  login(line: Line): Observable<JsonResponse> {
		return this.http.post(url+"Authenticate", line) as Observable<JsonResponse>;
  }
  list(): Observable<JsonResponse> {
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + 'Get/Line/' + id) as Observable<JsonResponse>;
  }
  add(line: Line): Observable<JsonResponse> {
    return this.http.post(url + 'Add', line) as Observable<JsonResponse>;
  }
  change(line: Line): Observable<JsonResponse> {
    return this.http.post(url + 'Change', line) as Observable<JsonResponse>;
  }
  remove(line: Line): Observable<JsonResponse> {
    return this.http.post(url + 'Remove', line) as Observable<JsonResponse>;
  }
  getPrli(id): Observable<JsonResponse> {
     return this.http.get(url+"Get/Prli/"+id) as Observable<JsonResponse>;
    }
  constructor(private http: HttpClient) { }
  }
