// login.component.ts
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService) {}

  onLogin(): void {
    this.apiService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log(response);
      },
      (error) => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
