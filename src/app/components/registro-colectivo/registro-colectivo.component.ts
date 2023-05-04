import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-colectivo',
  templateUrl: './registro-colectivo.component.html',
  styleUrls: ['./registro-colectivo.component.scss']
})
export class RegistroColectivoComponent implements OnInit {

  colectivo = {
    nombreColectivo: '',
    correo: '',
    contrasena: '',
    tipo: '',
    provincia: '',
    localidad: ''
  }

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){}

  registroColectivo() {
    this.authService.registroColectivo(this.colectivo)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio-colectivo']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
