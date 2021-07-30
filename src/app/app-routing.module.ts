import { LoginComponent } from './containers/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'clientes',
    loadChildren: () => import('./containers/clientes/clientes.module').then(module => module.ClientesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
