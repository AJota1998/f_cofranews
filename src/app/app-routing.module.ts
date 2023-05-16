import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

//components
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginColectivoComponent } from './components/login-colectivo/login-colectivo.component';
import { RegistroColectivoComponent } from './components/registro-colectivo/registro-colectivo.component';
import { InicioColectivoComponent } from './components/inicio-colectivo/inicio-colectivo.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { CrearEspacioComponent } from './components/crear-espacio/crear-espacio.component';

const routes: Routes = [
  //Usuario
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  },

  {
    path: 'task',
    component: TaskComponent
  },

  {
    path: 'private-task',
    component: PrivateTaskComponent,
    canActivate: [AuthGuard]
  }, 

  {
    path: 'registroUser',
    component: RegistroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  //Colectivos
  {
    path: 'login-colectivo',
    component: LoginColectivoComponent
  },

  {
    path: 'registro-colectivo',
    component: RegistroColectivoComponent
  },

  {
    path: 'inicio-colectivo',
    component: InicioColectivoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'crear-publicacion',
    component: CrearPublicacionComponent,
    canActivate: [AuthGuard]
  },

  //Admin 
  {
    path: 'panel-admin',
    component: PanelAdminComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'crear-espacio',
    component: CrearEspacioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
