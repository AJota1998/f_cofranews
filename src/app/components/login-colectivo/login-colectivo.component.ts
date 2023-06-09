import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-colectivo',
  templateUrl: './login-colectivo.component.html',
  styleUrls: ['./login-colectivo.component.scss']
})
export class LoginColectivoComponent implements OnInit {
  
  colectivo = {
    correo: '',
    contrasena: ''
  }
  
  alert: string = '';
  showMessage = false;

  constructor(private authService : AuthService, private router: Router) {}

  loginColectivo() {
    this.authService.loginColectivo(this.colectivo) 
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('correo', res.correo);
        localStorage.setItem('id', res.id);
        this.router.navigate(['/inicio-colectivo']);
      },
      err => {
        console.log(err);
        console.log(err.error);
        this.alert = err.error;
        this.showMessage = true;
  
        setTimeout(() => {
          this.showMessage = false;
        }, 1700);
      }
    )
  }


  ngOnInit(){}

}
