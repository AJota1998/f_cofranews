import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_ADMIN, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';

@Component({
  selector: 'app-admin-espacios',
  templateUrl: './admin-espacios.component.html',
  styleUrls: ['./admin-espacios.component.scss']
})

export class AdminEspaciosComponent implements OnInit {

  constructor(private espacios: ExplorarService) {}
  menu_usuario_admin: NavbarItem[] = MENU_USUARIO_ADMIN;

  datos: any[] = [];
  
  ngOnInit() {
      this.espacios.getEspacios().subscribe(res => {
        console.log(res);
        this.datos = res;
      })
  }
}
