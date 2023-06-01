import { Component, OnInit } from '@angular/core';
import { MENU_USUARIO_GENERAL, NavbarItem } from 'src/app/shared/components/navbar/model/navbar-item.model';
import { PrivateTaskService } from 'src/app/services/private-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.scss']
})
export class PrivateTaskComponent implements OnInit {

  constructor(private privatetaskService: PrivateTaskService, private router: Router) {}
  menu_usuario_general: NavbarItem[] = MENU_USUARIO_GENERAL;

  datos: any[] = [];

  ngOnInit() {
    this.privatetaskService.getAllTask().subscribe(res => {
      console.log(res);
      this.datos = res
    })    
}

redirigir(id: string) {
  this.router.navigate(['/contenido-espacios', id]);
}

abandonar(id: any) {
  this.privatetaskService.abandonar(id).subscribe(
    res => {
      console.log(res);
      console.log(res.message);
    },
    error => {
      console.log(error);
      alert(error.error.message);
    }
  );
}

}
