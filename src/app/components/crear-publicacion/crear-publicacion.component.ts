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
    idColectivo: localStorage.getItem('id'),
    idEspacio: localStorage.getItem('espacio'),
    tipo: '',
    titulo: '',
    contenido: '',
    pie: ''
  }

  alert: string = '';
  showMessage = false;
  constructor(private authService: AuthService, private router: Router) {}

  crearPublicacion() {

    if (this.publicacion.tipo === "" || this.publicacion.titulo === "" || this.publicacion.contenido === "" || this.publicacion.pie === "") {
      this.alert = "Faltan campos por rellenar"
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
    } else {
      this.authService.crearPublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {console.log(err);
        }
      )
      window.location.reload();
    }

   
  }

  ngOnInit() {}
}
