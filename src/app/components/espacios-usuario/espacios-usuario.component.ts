import { Component } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';

@Component({
  selector: 'app-espacios-usuario',
  templateUrl: './espacios-usuario.component.html',
  styleUrls: ['./espacios-usuario.component.scss']
})
export class EspaciosUsuarioComponent {
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;
}
