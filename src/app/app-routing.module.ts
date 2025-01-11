import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListaOrcamentosComponent } from './lista-orcamentos/lista-orcamentos.component';
import { NovoOrcamentoComponent } from './novo-orcamento/novo-orcamento.component';
import { DetalheOrcamentoComponent } from './detalhe-orcamento/detalhe-orcamento.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Dashboard como padrão
  { path: 'orcamentos/tarefas', component: TarefasComponent },
  { path: 'orcamentos', component: ListaOrcamentosComponent },
  { path: 'orcamentos/novo', component: NovoOrcamentoComponent },
  { path: 'orcamentos/:id_orcamento', component: DetalheOrcamentoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
