import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  getSomething() {
    return this.http.post('http://192.168.15.27/rc/raptor/session/camelus/login', {'usuario': 'magnanimus', 'password': '123'});
  }
}
