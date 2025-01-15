import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroSucessoComponent } from './cadastro-sucesso/cadastro-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientListComponent,
    ClientFormComponent, // Corrigido o nome para 'ClienteFormComponent'
    ClientEditComponent, PaginaInicialComponent, CadastroSucessoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideNgxMask(),
    provideHttpClient(withFetch()), // Provide HttpClient with Fetch
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
