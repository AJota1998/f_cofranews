import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

user = {
  nombre: '',
  nombreUsuario: '',
  correoElectronico: '',
  contrasena: '',
  rol: 'General',
};

constructor(private authService: AuthService, private router: Router) {}

ngOnInit() {}

registro() {
  this.authService.registro(this.user)
  .subscribe(
    res => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('correoElectronico', res.correoElectronico);
      localStorage.setItem('Rol', res.rol);
      this.router.navigate(['/private-task']);
    },
    err => {
      console.log(err);
    }
  )
}

}
