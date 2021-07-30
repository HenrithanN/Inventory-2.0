import { environment } from './../../../../environments/environment';
import { ClientesService } from './../../../services/clientes.service';
import { Clientes } from 'src/app/interfaces/clientes';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html'
})
export class ClientesCadastroComponent implements OnInit, OnChanges {

  cliente: Clientes[] = [];
  ufs: any = ['AC','AL','AP','AM','BA','CE','DF','ES','GO',
                  'MA','MT','MS','MG','PA','PB','PR','PE','PI',
                  'RJ','RN','RS','RO','RR','SC','SP','SE','TO']
  formCliente: FormGroup;
  arquivoImagem: File;
  urlImagem: string = '';

  constructor(private clientesService: ClientesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formCliente = this.fb.group({
      id:[''],
      nome:['',[Validators.required]],
      dataNasc:['',[Validators.required]],
      telefoneFixo:['',[Validators.required]],
      telefoneCelular:['',[Validators.required]],
      email:['',[Validators.required]],
      enderecoImagem:[''],
      rg:['',[Validators.required]],
      cpf:['',[Validators.required]],
      endereco:['',[Validators.required]],
      cep:['',[Validators.required]],
      uf:['',[Validators.required]]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    changes.urlImagem;
    console.log(changes)
    console.log(changes.urlImagem)
  }

  ulpoadImagem(arquivo: File){
    this.arquivoImagem = arquivo;
    const leitorArquivo = new FileReader();
    leitorArquivo.onload = (event: any) => this.urlImagem = event.target.result;
    leitorArquivo.readAsDataURL(arquivo);
  }

  setPhotoValue(dados: any){
    if(dados == ''){
      dados = environment.semFoto;
      return dados
    }
    else{
      return dados;
    }
  }
  cadastrarCliente(){

    const fotoCliente = this.setPhotoValue(this.formCliente.get('enderecoImagem').value);
    const dados = {
      rg: this.formCliente.get('rg').value,
      cpf: this.formCliente.get('cpf').value,
      dataNasc: this.formCliente.get('dataNasc').value,
      telefoneCelular: this.formCliente.get('telefoneCelular').value,
      enderecoImagem: fotoCliente,
      telefoneFixo: this.formCliente.get('telefoneFixo').value,
      endereco: this.formCliente.get('endereco').value,
      email: this.formCliente.get('email').value,
      nome: this.formCliente.get('nome').value
    }

    if(this.formCliente.valid){
      this.clientesService.cadastrar(dados).subscribe(()=>{
        alert('Cliente Cadastrado com Sucesso!');
      });

    }else{
      alert('Existem Dados Invalidos')
    }
  }
}
