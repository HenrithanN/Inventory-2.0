import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[] = [];
  buscaClientes: string = '';

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.listarTodos();
  }

  listarTodos(){
    this.clientesService.listarTodos().subscribe(res=> {
      this.clientes = this.clientes.concat(res)
    })
  }

  excluirCliente(cliente: any){
    this.clientesService.deletar(cliente.id).subscribe(()=>{
      alert(`Cliente ${cliente.nome} Removido Com Sucesso!`)

      this.clientes = [];
      this.listarTodos()
    });
  }
}
