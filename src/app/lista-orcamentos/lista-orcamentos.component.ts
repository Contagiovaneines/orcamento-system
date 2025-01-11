import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../services/orcamento.service';  // Caminho correto para o serviço

@Component({
  selector: 'app-lista-orcamentos',
  templateUrl: './lista-orcamentos.component.html',
  styleUrls: ['./lista-orcamentos.component.css']  // Corrigido para styleUrls (plural)
})
export class ListaOrcamentosComponent implements OnInit {
  orcamentos: any[] = [];

  constructor(private orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.obterOrcamentos();
  }

  obterOrcamentos(): void {
    this.orcamentoService.listarTodos().subscribe((data: any[]) => {  // Alterei getOrcamentos para listarTodos
      this.orcamentos = data;
    });
  }
}
