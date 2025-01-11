import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DashboardService } from '../services/dashboard.service';  // Ajuste se estiver uma pasta acima
import Chart from 'chart.js/auto';  // Certifique-se de que o Chart.js está importado corretamente

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tarefasStatus: number[] = [];
  orcamentos: number[] = [];

  constructor(private dashboardService: DashboardService, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verificar se está no navegador
    if (isPlatformBrowser(this.platformId)) {
      this.fetchDashboardData(); // Carregar dados do dashboard
    }
  }

  // Método para fazer a requisição HTTP ao backend
  fetchDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.tarefasStatus = data.tarefasStatus;
      this.orcamentos = data.orcamentos;
      this.createCharts(); // Chama o método para criar os gráficos após receber os dados
    });
  }

  createCharts() {
    // Gráfico de Status das Tarefas
    const tarefasStatusCanvas = document.getElementById('tarefasStatusChart') as HTMLCanvasElement;
    const tarefasStatusCtx = tarefasStatusCanvas.getContext('2d');
    if (tarefasStatusCtx) {
      new Chart(tarefasStatusCtx, {
        type: 'pie',
        data: {
          labels: ['Concluído', 'Pendente', 'Em Progresso'],
          datasets: [{
            label: 'Status',
            data: this.tarefasStatus, // Usando os dados do backend
            backgroundColor: ['#4caf50', '#f44336', '#2196f3']
          }]
        }
      });
    }

    // Gráfico de Orçamentos Gerados
    const orcamentosCanvas = document.getElementById('orcamentosChart') as HTMLCanvasElement;
    const orcamentosCtx = orcamentosCanvas.getContext('2d');
    if (orcamentosCtx) {
      new Chart(orcamentosCtx, {
        type: 'bar',
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março'],
          datasets: [{
            label: 'Orçamentos',
            data: this.orcamentos, // Usando os dados do backend
            backgroundColor: ['#673ab7', '#3f51b5', '#00bcd4']
          }]
        }
      });
    }
  }
}
