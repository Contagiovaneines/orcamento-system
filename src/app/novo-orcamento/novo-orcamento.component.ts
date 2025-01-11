import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrcamentoService } from '../services/orcamento.service'; // Service para interagir com a API


@Component({
  selector: 'app-novo-orcamento',
  templateUrl: './novo-orcamento.component.html',
  styleUrl: './novo-orcamento.component.css'
})
export class NovoOrcamentoComponent  {
  orcamento: any = {};
  demandas: any[] = [];
  tarefas: any[] = [];
  orcamentoGerado: boolean = false;

  constructor(private orcamentoService: OrcamentoService) {}

  ngOnInit(): void {
    this.carregarDemandas();
  }

  carregarDemandas(): void {
    this.orcamentoService.listarDemandas().subscribe((data) => {
      this.demandas = data;
    });
  }

  carregarDetalhesDemanda(): void {
    if (!this.orcamento.idDemanda) {
      return;
    }

    this.orcamentoService.buscarDemandaDetalhes(this.orcamento.idDemanda).subscribe((demanda) => {
      this.orcamento.cliente = demanda.cliente.nome;
      this.tarefas = demanda.tarefas.length ? demanda.tarefas : [{ descricao: 'Nenhuma tarefa associada' }];
    });
  }

  gerarOrcamento(): void {
    if (!this.orcamento.idDemanda || !this.orcamento.valor || !this.orcamento.prazoEstimado) {
      alert('Por favor, preencha todos os campos antes de gerar o orçamento.');
      return;
    }

    this.orcamentoService.salvarOrcamento(this.orcamento).subscribe(
      (orcamento) => {
        this.orcamentoGerado = true;
        this.orcamento = orcamento;  // Exibe o orçamento gerado na tela
      },
      (error) => {
        alert('Erro ao gerar o orçamento. Tente novamente.');
        console.error(error);
      }
    );
  }
}
