import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importação para formulários reativos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListaOrcamentosComponent } from './lista-orcamentos/lista-orcamentos.component';
import { NovoOrcamentoComponent } from './novo-orcamento/novo-orcamento.component';
import { DetalheOrcamentoComponent } from './detalhe-orcamento/detalhe-orcamento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';  // Mantenha apenas o HttpClientModule
import { OrcamentoService } from './services/orcamento.service';
import { FormsModule } from '@angular/forms'; // Necessário para usar ngModel

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TarefasComponent,
    ListaOrcamentosComponent,
    NovoOrcamentoComponent,
    DetalheOrcamentoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Certifique-se de manter o HttpClientModule
    FormsModule,       // Necessário para usar ngModel
    ReactiveFormsModule // Importado caso precise de formulários reativos
  ],
  providers: [OrcamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
