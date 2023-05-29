import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-publicaciones-colectivo',
  templateUrl: './publicaciones-colectivo.component.html',
  styleUrls: ['./publicaciones-colectivo.component.scss']
})
export class PublicacionesColectivoComponent implements OnInit {

  constructor(private publicaciones: PublicacionesService) {}
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;

  ngOnInit() {
      this.publicaciones.getPublicaciones().subscribe(res => {
        console.log(res);
      })

      this.publicaciones.getEspacioColectivo().subscribe(res => {
        console.log(res)
        for (let objeto of res) {
          localStorage.setItem("espacio", objeto._id)
        }
      })
  }
}
