import { Component } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
@Component({
  selector: 'app-espacios-colectivo',
  templateUrl: './espacios-colectivo.component.html',
  styleUrls: ['./espacios-colectivo.component.scss']
})
export class EspaciosColectivoComponent {
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;
}
