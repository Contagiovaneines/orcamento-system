import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';  // Importa a Página Inicial
import { CadastroSucessoComponent } from './cadastro-sucesso/cadastro-sucesso.component';  // Importando o componente de sucesso

export const routes: Routes = [
  { path: '', component: PaginaInicialComponent, data: { title: 'Kaspper - Home' } },
  { path: 'clientes/novo', component: ClientFormComponent, data: { title: 'Kaspper - Novo Orcamento' } },
  { path: 'cadastro-sucesso', component: CadastroSucessoComponent, data: { title: 'Kaspper - Cadastro Realizado com Sucesso' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
