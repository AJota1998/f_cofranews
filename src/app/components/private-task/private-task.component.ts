import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PrivateTaskService } from 'src/app/services/private-task.service';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.scss']
})
export class PrivateTaskComponent implements OnInit {

  constructor(private privatetaskService: PrivateTaskService) {}
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;

  ngOnInit() {
    this.privatetaskService.getAllTask().subscribe(res => {
      console.log(res);
    })
}
}
