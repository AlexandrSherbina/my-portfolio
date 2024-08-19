import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getResume(): Observable<string> {
    return this.http.get(`${this.apiUrl}/resume`, {
      headers: this.getAuthHeaders(),
      responseType: 'text'
    });
  }

  updateResume(resume: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/resume`, { resume }, {
      headers: this.getAuthHeaders()
    });
  }

  downloadResume(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/resume/download`, {
      headers: this.getAuthHeaders(),
      responseType: 'blob'
    });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
}