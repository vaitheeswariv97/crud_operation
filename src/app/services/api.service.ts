import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:5832/';
  constructor(private _http: HttpClient) {}
  get(url: any) {
    return this._http.get(`${this.baseUrl}${url}`).pipe((res) => {
      return res;
    });
  }
  post(url: any, payload: any) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe((res) => {
      return res;
    });
  }

  patch(url: any, payload: any) {
    return this._http.patch(`${this.baseUrl}${url}`, payload).pipe((res) => {
      return res;
    });
  }

  put(url: any, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe((res) => {
      return res;
    });
  }

  delete(url: any) {
    return this._http.delete(`${this.baseUrl}${url}`).pipe((res) => {
      return res;
    });
  }
}
