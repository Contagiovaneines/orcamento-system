import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {  // Mudança de Cliente para Client
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
  empresa?: string;
  solicitacao?: string;  // Mantendo a propriedade solicitacao
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {  // Mudança de ClienteService para ClientService
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  // Método para obter todos os clientes
  getClients(): Observable<Client[]> {  // Mudança de Cliente para Client
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Método para obter um cliente específico por ID
  getClientById(id: number): Observable<Client> {  // Mudança de Cliente para Client
    return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  // Método para verificar duplicidade de email
  checkEmailDuplicity(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check-email-duplicity?email=${email}`);
  }

  // Método para salvar ou atualizar um cliente
  saveClient(client: Client): Observable<Client> {  // Mudança de Cliente para Client
    if (client.id) {
      // Atualizando um cliente existente
      return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client);
    } else {
      // Criando um novo cliente
      return this.http.post<Client>(this.apiUrl, client);
    }
  }

  // Método para excluir um cliente
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
