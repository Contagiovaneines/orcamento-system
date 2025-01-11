import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // Importa o ambiente

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl + '/dashboard';  // URL da API para orçamentos

  constructor(private http: HttpClient) { }

  // Método para obter dados do dashboard
  getDashboardData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
