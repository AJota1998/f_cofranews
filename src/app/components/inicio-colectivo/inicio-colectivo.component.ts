import { Component } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';

@Component({
  selector: 'app-inicio-colectivo',
  templateUrl: './inicio-colectivo.component.html',
  styleUrls: ['./inicio-colectivo.component.scss']
})
export class InicioColectivoComponent {
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;
}
