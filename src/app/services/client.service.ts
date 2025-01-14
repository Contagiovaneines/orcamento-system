import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  empresa?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/api/clientes';  // URL da API

  constructor(private http: HttpClient) {}

  // Método para obter todos os clientes
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Método para obter um cliente pelo ID
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // Método para verificar se o email é duplicado
  checkEmailDuplicity(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-email-duplicity?email=${email}`);
  }

  // Método para salvar ou atualizar o cliente
  saveClient(client: Client): Observable<Client> {
    if (client.id) {
      // Se o cliente já tem um id, chamamos o método de atualização
      return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
    } else {
      // Se o cliente não tem um id, é um novo cadastro
      return this.http.post<Client>(this.apiUrl, client);
    }
  }

  // Método para deletar um cliente
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
