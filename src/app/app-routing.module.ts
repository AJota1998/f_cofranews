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
import { EspaciosColectivoComponent } from './components/espacios-colectivo/espacios-colectivo.component';
import { EspaciosUsuarioComponent } from './components/espacios-usuario/espacios-usuario.component';
import { PerfilColectivoComponent } from './components/perfil-colectivo/perfil-colectivo.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { PublicacionesColectivoComponent } from './components/publicaciones-colectivo/publicaciones-colectivo.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { AdminColectivosComponent } from './components/admin-colectivos/admin-colectivos.component';
import { AdminEspaciosComponent } from './components/admin-espacios/admin-espacios.component';
import { AdminPublicacionesComponent } from './components/admin-publicaciones/admin-publicaciones.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { ContenidoEspaciosComponent } from './components/contenido-espacios/contenido-espacios.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full'
  },

  //PRINCIPAL
  {
    path: 'task',
    component: TaskComponent
  },

  //Usuario
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

  {
    path: 'espacios-usuario',
    component: EspaciosUsuarioComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'perfil-usuario',
    component: PerfilUsuarioComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'explorar',
    component: ExplorarComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'contenido-espacios/:id',
    component: ContenidoEspaciosComponent,
    canActivate: [AuthGuard]
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
    path: 'espacios-colectivo',
    component: EspaciosColectivoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'perfil-colectivo',
    component: PerfilColectivoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'publicaciones-colectivo',
    component: PublicacionesColectivoComponent,
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
  },

  {
    path: 'crear-publicacion',
    component: CrearPublicacionComponent,
    canActivate: [AuthGuard]
  },
   
  {
    path: 'admin-colectivos',
    component: AdminColectivosComponent,
    canActivate: [AuthGuard]
   },

  {
    path: 'admin-espacios',
    component: AdminEspaciosComponent,
    canActivate: [AuthGuard]
  },
   
  {
    path: 'admin-publicaciones',
    component: AdminPublicacionesComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin-usuarios', 
    component: AdminUsuariosComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
