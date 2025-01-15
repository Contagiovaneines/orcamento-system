import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup;
  title = 'orcamento-system';

  constructor(
    private router: Router,
    private titleService: Title,
    formBuilder: FormBuilder
  ) {
    // Inicialização do formulário usando FormBuilder
    this.form = formBuilder.nonNullable.group({
      telefone: [''],
    });

    // Atualiza o título sempre que a navegação termina
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const routeData = this.router.routerState.snapshot.root.firstChild?.data;
      if (routeData && routeData['title']) {
        this.titleService.setTitle(routeData['title']);
      }
    });
  }

  // Getter para acessar o campo 'telefone' no formulário
  get telefone() {
    return this.form.get('telefone')!;
  }
}
