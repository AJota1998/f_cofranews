import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  publicacion = {
    idColectivo: '',
    idEspacio: '',
    tipo: '',
    titulo: '',
    contenido: '',
    pie: ''
  }

  constructor(private authService: AuthService, private router: Router) {}

  crearPublicacion() {
    this.authService.crearPublicacion(this.publicacion)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {console.log(err);
      }
    )
  }

  ngOnInit() {}
}
