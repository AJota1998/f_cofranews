import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PerfilColectivoService } from 'src/app/services/perfil-colectivo.service';

@Component({
  selector: 'app-inicio-colectivo',
  templateUrl: './inicio-colectivo.component.html',
  styleUrls: ['./inicio-colectivo.component.scss']
})
export class InicioColectivoComponent implements OnInit{
  
  constructor(private info: PerfilColectivoService) {}
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;

  datos: any[] = [];

  ngOnInit() {
    this.info.getInfo().subscribe(res => {
      console.log(res);
      this.datos = res
    }) 
  }
}
