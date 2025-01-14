import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  { path: 'clientes', component: ClientListComponent },
  { path: 'clientes/novo', component: ClientFormComponent },  // Rota para criação
  { path: 'clientes/editar/:id', component: ClientEditComponent },  // Rota para edição
  { path: '', redirectTo: '/clientes/novo', pathMatch: 'full' }, // Redireciona para o formulário de criação
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
