import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  listarTodos(){
    return this.http.get<Clientes>(`${API_URL}/clientes`)
  }

  listarUm(id: number){
    return this.http.get(`${API_URL}/clientes/${id}`)
  }

  atualizarDados(body: any){
    return this.http.put(`${API_URL}/clientes/${body.id}`, body)
  }

  deletar(id: number){
    return this.http.delete(`${API_URL}/clientes/${id}`)
  }

  cadastrar(body: Clientes){
    return this.http.post(`${API_URL}/clientes`, body)
  }
}
