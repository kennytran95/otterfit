import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductStylesService {
  constructor(private http: HttpClient) {}
  //good product stytles...
  // 51, 60, 61, 62?, 99 but 1, 127, 149, 169, 178, 182, 187, 200, 203!, 300, 3984, 3983, 39959,
  getStylesData() {
    return this.http.get('http://localhost:3000/products/203/styles');
  }
}
