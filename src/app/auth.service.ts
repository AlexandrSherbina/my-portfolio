// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Здесь должна быть реальная логика аутентификации
  hasEditAccess(): boolean {
    // Пример проверки прав доступа
    return localStorage.getItem('userRole') === 'admin';
  }
}