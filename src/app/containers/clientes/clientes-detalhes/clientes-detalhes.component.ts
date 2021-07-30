import { ClientesService } from './../../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clientes-detalhes',
  templateUrl: './clientes-detalhes.component.html'
})
export class ClientesDetalhesComponent implements OnInit {

  cliente: any = [];
  ufs: any = ['AC','AL','AP','AM','BA','CE','DF','ES','GO',
                  'MA','MT','MS','MG','PA','PB','PR','PE','PI',
                  'RJ','RN','RS','RO','RR','SC','SP','SE','TO']
  formCliente: FormGroup;
  arquivoImagem: File;
  urlImagem: string = '';

  constructor(private route:ActivatedRoute, private clientesService: ClientesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formCliente = this.fb.group({
      id:[''],
      nome:['',[Validators.required]],
      dataNasc:['',[Validators.required]],
      telefoneFixo:[''],
      telefoneCelular:['',[Validators.required]],
      email:['',[Validators.required]],
      enderecoImagem:[''],
      rg:['',[Validators.required]],
      cpf:['',[Validators.required]],
      endereco:['',[Validators.required]],
      cep:['',[Validators.required]],
      uf:['',[Validators.required]]
    })
    this.listarUmCliente()
  }

  listarUmCliente(){
    const id = this.route.snapshot.params.id;
    this.clientesService.listarUm(id).subscribe(res =>{
      this.formCliente.setValue(res);
      this.cliente = res
    });
  }

  ulpoadImagem(arquivo: File){
    this.arquivoImagem = arquivo;
    const leitorArquivo = new FileReader();
    leitorArquivo.onload = (event: any) => {
      this.cliente.enderecoImagem = this.urlImagem;
      event.target.result = this.urlImagem
    }

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

  atualizarDados(){
    if(this.formCliente.valid){
      const dados = this.formCliente.getRawValue();

      this.clientesService.atualizarDados(dados).subscribe(() => {
        this.router.navigate(['clientes'])
      });
    }
    else{
      this.formCliente.markAllAsTouched();
      alert('Existem Dados Invalidos');
    }
  }
}
