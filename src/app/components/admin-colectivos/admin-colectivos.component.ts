import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';


@Component({
  selector: 'app-admin-colectivos',
  templateUrl: './admin-colectivos.component.html',
  styleUrls: ['./admin-colectivos.component.scss']
})

export class AdminColectivosComponent implements OnInit {

  constructor(private colectivos: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = []

  ngOnInit() {
    this.colectivos.getColectivos().subscribe(res => {
      console.log(res);
      this.datos = res;
    })
  }

}
