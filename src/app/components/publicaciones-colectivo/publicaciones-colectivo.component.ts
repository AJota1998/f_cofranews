import { Component } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';

@Component({
  selector: 'app-publicaciones-colectivo',
  templateUrl: './publicaciones-colectivo.component.html',
  styleUrls: ['./publicaciones-colectivo.component.scss']
})
export class PublicacionesColectivoComponent {
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;
}
