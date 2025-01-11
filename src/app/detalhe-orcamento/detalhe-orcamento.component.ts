import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detalhe-orcamento',
  templateUrl: './detalhe-orcamento.component.html',
  styleUrl: './detalhe-orcamento.component.css'
})
export class DetalheOrcamentoComponent {

  orcamento: any = {};
  tarefas: any[] = [];
  prazoEstimado: number = 0;
  valorTotal: number = 0;
  prazoFinal: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Exemplo de requisição HTTP para pegar os dados
    this.http.get<any>('http://localhost:8080/orcamento/1') // URL do seu endpoint
      .subscribe(data => {
        this.orcamento = data.orcamento;
        this.tarefas = data.tarefas;
        this.prazoEstimado = data.prazoEstimado;
        this.valorTotal = data.valorTotal;
        this.prazoFinal = data.prazoFinal;
      });
  }

}
