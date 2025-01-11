import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Ajuste conforme seu ambiente

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private apiUrl = environment.apiUrl + '/orcamentos';  // URL da API para orçamentos

  constructor(private http: HttpClient) {}

  // Método para listar todas as demandas
  listarDemandas(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/demandas`);
  }

  // Método para obter os detalhes de uma demanda
  buscarDemandaDetalhes(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/demandas/${id}`);
  }

  // Método para listar todos os orçamentos
  listarTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para buscar um orçamento por ID
  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Método para criar um novo orçamento
  salvarOrcamento(orcamento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orcamento);
  }

  // Método para excluir um orçamento
  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar um orçamento
  atualizar(id: number, orcamento: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, orcamento);
  }

  // Método para listar orçamentos com filtros
  listarComFiltros(status?: string, valorMinimo?: number, valorMaximo?: number): Observable<any> {
    let url = `${this.apiUrl}/filtrar?`;
    if (status) {
      url += `status=${status}&`;
    }
    if (valorMinimo) {
      url += `valorMinimo=${valorMinimo}&`;
    }
    if (valorMaximo) {
      url += `valorMaximo=${valorMaximo}&`;
    }
    return this.http.get<any>(url);
  }
}
