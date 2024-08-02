// resume.component.ts
import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeHtmlPipe],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: string = '';
  isEditing: boolean = false;
  isAdmin: boolean = false;

  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit() {
    this.loadResume();
    this.checkAdminStatus();
  }

  loadResume() {
    this.resumeService.getResume().subscribe(
      data => this.resume = data,
      error => {
        console.error('Ошибка при загрузке резюме', error);
        if (error.status === 401) {
          this.router.navigate(['/app-login']);
        }
      }
    );
  }

  checkAdminStatus() {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      const tokenParts = token.split('.');
      if (tokenParts.length !== 3) {
        console.error('Некорректный формат токена');
        return;
      }

      try {
        const payload = JSON.parse(atob(tokenParts[1]));
        const now = Date.now() / 1000; // Текущее время в секундах
        if (payload.exp && now > payload.exp) {
          console.error('Токен истек');
          return;
        }

        this.isAdmin = payload.role === 'admin';
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error);
      }
    }
  }


  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveResume() {
    this.resumeService.updateResume(this.resume).subscribe(
      (response: any) => {
        this.isEditing = false;
        console.log(response.message);
      },
      error => console.error('Ошибка при обновлении резюме', error)
    );
  }

  downloadResume() {
    this.resumeService.downloadResume().subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      error => console.error('Ошибка при скачивании резюме', error)
    );
  }
}
