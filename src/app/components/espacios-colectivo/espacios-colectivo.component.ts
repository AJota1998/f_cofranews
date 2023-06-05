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
  botonDesactivado = false;
  botonesDesactivados: { [id: string]: boolean } = {};


  ngOnInit() {
      this.espaciosColectivo.getEspacios().subscribe(res => {
        console.log(res);
        this.datos = res
      })

      const id_colectivo = localStorage.getItem("id");
      this.verificar(id_colectivo);

  }

  verificar(id_colectivo: any) {
    this.espaciosColectivo.verificar(id_colectivo)
    .subscribe(incluido => {
      this.botonDesactivado = incluido
    },
    error => {
      console.log("Error al verificar", error)
    });
  }

  pertenecer(id: any) {
    this.espaciosColectivo.pertenecer(id).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    })
    window.location.reload();
  }


  dejarde(id: any) {
    this.espaciosColectivo.dejarde(id).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    })
    window.location.reload();
  }
}
