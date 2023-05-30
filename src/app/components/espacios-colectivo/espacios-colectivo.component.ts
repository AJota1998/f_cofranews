import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_COLECTIVO, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';

@Component({
  selector: 'app-espacios-colectivo',
  templateUrl: './espacios-colectivo.component.html',
  styleUrls: ['./espacios-colectivo.component.scss']
})
export class EspaciosColectivoComponent implements OnInit {

  constructor(private espaciosColectivo: ExplorarService) {}
  menu_usuario_colectivo: NavbarItem[] = MENU_USUARIO_COLECTIVO;

  datos: any[] = []

  ngOnInit() {
      this.espaciosColectivo.getEspacios().subscribe(res => {
        console.log(res);
        this.datos = res
      })

  }
}
