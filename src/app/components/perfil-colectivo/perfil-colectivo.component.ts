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

  datos: any[] = []
  alert: any = '';
  showMessage = false;

  ngOnInit() {
      this.perfilcolectivo.getDatos().subscribe(res => {
        console.log(res);
        this.datos = res
      })
  }

  actualizarColectivo(colectivo: any) {
    this.perfilcolectivo.actualizarColectivo(colectivo).subscribe(res => {
      console.log(res);
      this.alert = "Colectivo actualizado correctamente";
      this.showMessage = true;

      setTimeout(() => {
        this.showMessage = false;
      }, 1700);
    })
    setTimeout(() => {
      window.location.reload();
    }, 1700);
  }
}
