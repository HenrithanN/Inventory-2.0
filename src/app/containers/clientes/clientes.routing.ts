import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  { path:'', component: ClientesComponent },
  { path:'cadastrar', component: ClientesCadastroComponent },
  { path:':id', component: ClientesDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
