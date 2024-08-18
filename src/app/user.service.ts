import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string = 'UserName'; // Замените на реальное имя пользователя

  getUsername(): string {
    return this.username;
  }

  setUsername(newUsername: string): void {
    this.username = newUsername;
  }

  getUserNameLocalStorage() {
    return localStorage.getItem('username');
  }

  setUserNameLocalStorage(newUsername: string): void {
    localStorage.setItem('username', newUsername);
  }

  removeUserNameLocalStorage(): void {
    localStorage.removeItem('username');
  }

}
