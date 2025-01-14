import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correção no nome da propriedade
})
export class AppComponent {
  form: FormGroup;
  title = 'orcamento-system';

  constructor(formBuilder: FormBuilder) {
    // Inicialização do formulário usando FormBuilder
    this.form = formBuilder.nonNullable.group({
      telefone: [''],
    });
  }

  // Getter para acessar o campo 'telefone' no formulário
  get telefone() {
    return this.form.get('telefone')!;
  }
}
