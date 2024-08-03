import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  getResume(token: string | null): Observable<string> {
    return this.http.get(`${this.apiUrl}/resume`, {
      headers: this.getAuthHeaders(token),
      responseType: 'text'
    })
      .pipe(
        catchError(error => {
          if (error.status === 401) {
            return this.refreshToken(this.getRefreshToken()).pipe(
              mergeMap(newToken => this.getResume(newToken)) // Повторный запрос с новым токеном
            );
          }
          throw error;
        })
      );
  }

  updateResume(resume: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/resume`, { resume }, {
      headers: this.getAuthHeaders(this.getToken())
    });
  }

  refreshToken(refreshToken: string | null): Observable<string> {
    return this.http.post<any>(`${this.apiUrl}/api/refresh`, { refreshToken })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
        }),
        catchError(error => {
          console.error('Ошибка при обновлении токена:', error);
          // Здесь можно реализовать более сложную обработку ошибок, например,
          // показать сообщение пользователю или перенаправить на страницу авторизации
          return throwError(() => new Error(error));
        })
      );
  }

  downloadResume(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/resume/download`, {
      headers: this.getAuthHeaders(this.getToken()),
      responseType: 'blob'
    })
  }

  getToken(): string | null {
    return typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
  }

  getRefreshToken(): string | null {
    return typeof localStorage !== 'undefined' ? localStorage.getItem('refreshToken') : null;
  }

  private getAuthHeaders(newToken: string | null | undefined): HttpHeaders {
    // const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    const token = newToken ? newToken : this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}