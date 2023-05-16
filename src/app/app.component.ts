import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  esGeneral: boolean = false;
  esAdmin: boolean = false;
  esColectivo: boolean = false;

  constructor(public authService: AuthService) {
    const rolActual = localStorage.getItem('Rol');
    const token = localStorage.getItem('token');

    if(rolActual) {
      switch (rolActual) {
        case 'General':
          this.esGeneral = true;
          break;

        case 'Admin':
          this.esAdmin = true;
          break;
      }
    } else if (!rolActual && token) {
        this.esColectivo = true;
    }
  }
}
