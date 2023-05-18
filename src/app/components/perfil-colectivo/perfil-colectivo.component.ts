import { Component } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';

@Component({
  selector: 'app-perfil-colectivo',
  templateUrl: './perfil-colectivo.component.html',
  styleUrls: ['./perfil-colectivo.component.scss']
})
export class PerfilColectivoComponent {
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;
}
