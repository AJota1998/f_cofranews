import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

//components
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
