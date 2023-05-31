import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { LoginColectivoComponent } from './components/login-colectivo/login-colectivo.component';
import { RegistroColectivoComponent } from './components/registro-colectivo/registro-colectivo.component';
import { InicioColectivoComponent } from './components/inicio-colectivo/inicio-colectivo.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { CrearEspacioComponent } from './components/crear-espacio/crear-espacio.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { EspaciosUsuarioComponent } from './components/espacios-usuario/espacios-usuario.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { EspaciosColectivoComponent } from './components/espacios-colectivo/espacios-colectivo.component';
import { PerfilColectivoComponent } from './components/perfil-colectivo/perfil-colectivo.component';
import { PublicacionesColectivoComponent } from './components/publicaciones-colectivo/publicaciones-colectivo.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { AdminEspaciosComponent } from './components/admin-espacios/admin-espacios.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminColectivosComponent } from './components/admin-colectivos/admin-colectivos.component';
import { AdminPublicacionesComponent } from './components/admin-publicaciones/admin-publicaciones.component';
import { ContenidoEspaciosComponent } from './components/contenido-espacios/contenido-espacios.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    TaskComponent,
    PrivateTaskComponent,
    LoginColectivoComponent,
    RegistroColectivoComponent,
    InicioColectivoComponent,
    PanelAdminComponent,
    CrearPublicacionComponent,
    CrearEspacioComponent,
    NavbarComponent,
    FooterComponent,
    EspaciosUsuarioComponent,
    PerfilUsuarioComponent,
    EspaciosColectivoComponent,
    PerfilColectivoComponent,
    PublicacionesColectivoComponent,
    ExplorarComponent,
    AdminEspaciosComponent,
    AdminUsuariosComponent,
    AdminColectivosComponent,
    AdminPublicacionesComponent,
    ContenidoEspaciosComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
