import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Ajuste conforme seu ambiente

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = environment.apiUrl + '/tarefas';  // URL da API para orçamentos


  constructor(private http: HttpClient) { }

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteTarefa(idTarefa: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idTarefa}`);
  }

  // Adicione métodos de criação e edição conforme necessário
}
