import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { format } from 'date-fns';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-publicaciones-colectivo',
  templateUrl: './publicaciones-colectivo.component.html',
  styleUrls: ['./publicaciones-colectivo.component.scss']
})
export class PublicacionesColectivoComponent implements OnInit {

  constructor(private publicaciones: PublicacionesService, private authService: AuthService) {}
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;

  publicacion = {
    idColectivo: localStorage.getItem('id'),
    idEspacio: localStorage.getItem('espacio'),
    tipo: '',
    titulo: '',
    contenido: '',
    pie: ''
  }

  datos: any[] = []

  alert: string = '';
  showMessage = false;

  ngOnInit() {
      this.publicaciones.getPublicaciones().subscribe(res => {
        console.log(res);
        this.datos = res
      })

      this.publicaciones.getEspacioColectivo().subscribe(res => {
        console.log(res)
        for (let objeto of res) {
          localStorage.setItem("espacio", objeto._id)
        }
      })
  }

  eliminarP(id: number) {
    this.publicaciones.eliminarP(id).subscribe(
      res => {
        console.log('Publicación eliminada correctamente');
        console.log(res);
        console.log(res.message);
        this.alert = res.message;
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 1700);
      },
      error => {
        console.log('Error al eliminar la publicación:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
    setTimeout(() => {
     window.location.reload();
    }, 1700);
  }

  format(fecha: string): string {
    return format(new Date(fecha), 'dd/MM/yyyy');
  }

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
}
