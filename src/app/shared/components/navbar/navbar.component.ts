import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarItem } from './model/navbar-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input()
  navbarItemList: NavbarItem[] = [];
  
  constructor(public authService: AuthService){}
}
