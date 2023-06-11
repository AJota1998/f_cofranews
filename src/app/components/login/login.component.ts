import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user = {
    correoElectronico: '',
    contrasena: ''
  }

  alert: string = '';
  showMessage = false;

  constructor(private authService : AuthService, private router : Router ) {}
  
  ngOnInit() {}

  login() {
    this.authService.login(this.user) 
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('Rol', res.rol);
        localStorage.setItem('correoElectronico', res.correoElectronico);
        if (res.rol === 'General') {
          this.router.navigate(['/private-task']);
        } else {
          this.router.navigate(['/panel-admin']);
        }
        
      },
      err => {
        console.log(err.error);
        this.alert = err.error;
        this.showMessage = true;
  
        setTimeout(() => {
          this.showMessage = false;
        }, 1700);
      }
    )
  }
}
