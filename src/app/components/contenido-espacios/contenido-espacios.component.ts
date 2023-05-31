import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PrivateTaskService } from 'src/app/services/private-task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido-espacios',
  templateUrl: './contenido-espacios.component.html',
  styleUrls: ['./contenido-espacios.component.scss']
})
export class ContenidoEspaciosComponent implements OnInit {

  id: any;
  datos: any[] = [];

  constructor(private privatetaskService: PrivateTaskService, private route: ActivatedRoute) {}
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    })
    this.privatetaskService.getPublicaciones(this.id).subscribe(res => {
      console.log(res);
      this.datos = res;
    })

  }

}
