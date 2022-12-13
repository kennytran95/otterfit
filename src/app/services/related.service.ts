import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RelatedService {
  constructor(private http: HttpClient) {}

  getRelated() {
    return this.http.get('http://localhost:3000/products/1/related');
  }
}
