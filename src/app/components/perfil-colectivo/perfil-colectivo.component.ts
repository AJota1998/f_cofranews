import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PerfilColectivoService } from 'src/app/services/perfil-colectivo.service';

@Component({
  selector: 'app-perfil-colectivo',
  templateUrl: './perfil-colectivo.component.html',
  styleUrls: ['./perfil-colectivo.component.scss']
})
export class PerfilColectivoComponent implements OnInit {

  constructor(private perfilcolectivo: PerfilColectivoService) {}
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;

  ngOnInit() {
      this.perfilcolectivo.getDatos().subscribe(res => {
        console.log(res);
      })
  }
}
