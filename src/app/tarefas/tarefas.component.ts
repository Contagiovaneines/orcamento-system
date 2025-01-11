import { Component } from '@angular/core';
import { TarefaService } from '../services/tarefa.service'; // Importe o serviço de tarefas, ajuste conforme necessário
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent  {
  tarefas: any[] = []; // Defina o tipo de dados conforme o modelo

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.loadTarefas();
  }

  loadTarefas(): void {
    this.tarefaService.getTarefas().subscribe((data) => {
      this.tarefas = data; // Ajuste conforme a estrutura de dados recebida
    });
  }

  confirmDelete(idTarefa: number): void {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      this.deleteTarefa(idTarefa);
    }
  }

  deleteTarefa(idTarefa: number): void {
    this.tarefaService.deleteTarefa(idTarefa).subscribe(() => {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.idTarefa !== idTarefa);
    });
  }
}
