import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { ExplorarService } from 'src/app/services/explorar.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.scss']
})
export class ExplorarComponent implements OnInit {

  constructor(private espacios: ExplorarService) {}
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;

  
  datos: any[] = [];
  alert: string = '';
  alertError: string = '';
  showMessage = false;
  showError = false;

  ngOnInit() {
    this.espacios.getEspacios().subscribe(res => {
      console.log(res);
      this.datos = res;
    })
  }

  seguir(id: any) {
    this.espacios.seguir(id).subscribe(
      res => {
        console.log(res);
        console.log(res.message);
        this.alert = res.message;
        this.showMessage = true;

        setTimeout(() => {
          this.showMessage = false;
        }, 1700);
      },
      error => {
        console.log(error.error.message);

          this.alertError = error.error.message;
          this.showError = true;

          setTimeout(() => {
            this.showError = false;
          }, 1700);
        }
    );
  }
  
}
