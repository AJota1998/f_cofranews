import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-admin-publicaciones',
  templateUrl: './admin-publicaciones.component.html',
  styleUrls: ['./admin-publicaciones.component.scss']
})
export class AdminPublicacionesComponent implements OnInit {

  constructor(private publicaciones: ExplorarService, private publi: PublicacionesService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = [];

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
        // Realiza cualquier acción adicional después de eliminar la publicación
      },
      error => {
        console.log('Error al eliminar la publicación:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }

}
