import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { SearchPipe } from './../../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes.routing';
import { ClientesDetalhesComponent } from './clientes-detalhes/clientes-detalhes.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalhesComponent,
    ClientesCadastroComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ClientesRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class ClientesModule { }
