import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  logOut() {
    localStorage.removeItem('token');
    this.userService.removeUserNameLocalStorage();
  }

  getToken() {
    return localStorage !== undefined ? localStorage.getItem('token') : null;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
}
