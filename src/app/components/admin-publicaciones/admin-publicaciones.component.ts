import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-admin-publicaciones',
  templateUrl: './admin-publicaciones.component.html',
  styleUrls: ['./admin-publicaciones.component.scss']
})
export class AdminPublicacionesComponent implements OnInit {

  constructor(private publicaciones: ExplorarService, private publi: PublicacionesService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = [];

  alert: string = '';
  showMessage = false;

  ngOnInit() {
    this.publicaciones.getPublicaciones().subscribe(res => {
      console.log(res);
      this.datos = res;
    })
  }

  eliminarP(id: number) {
    this.publi.eliminarP(id).subscribe(
      res => {
        console.log('Publicación eliminada correctamente');
        this.alert = "Publicación eliminada correctamente"
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
          window.location.reload();
        }, 1700);
      },
      error => {
        console.log('Error al eliminar la publicación:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }

  format(fecha: string): string {
    return format(new Date(fecha), 'dd/MM/yyyy');
  }

}
