import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http_: HttpClient) {}

  resolve() {
    return this.http_.get<any>('https://reqres.in/api/users?page=2');
  }
}
