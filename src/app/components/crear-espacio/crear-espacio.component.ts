import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-espacio',
  templateUrl: './crear-espacio.component.html',
  styleUrls: ['./crear-espacio.component.scss']
})
export class CrearEspacioComponent implements OnInit {

  espacio = {
    nombre: '',
    descripcion: '',
    colectivos: []
  }

  constructor(private authService: AuthService, private router: Router) {}

  crearEspacio() {
    this.authService.crearEspacio(this.espacio)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {console.log(err);
      }
    )
    window.location.reload();
  }

  ngOnInit(){}
}
