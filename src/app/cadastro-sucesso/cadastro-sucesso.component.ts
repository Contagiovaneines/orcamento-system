import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-sucesso',
  templateUrl: './cadastro-sucesso.component.html',
  styleUrls: ['./cadastro-sucesso.component.css']
})
export class CadastroSucessoComponent implements OnInit {

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Exibe a mensagem de sucesso
    const snack = this.snackBar.open('Muito bem, recebemos seu cadastro! Nossa equipe de Análise de requisitos entrará em contato em breve.', 'Fechar', {
      duration: 5000, // A mensagem ficará visível por 5 segundos
      panelClass: ['snack-success']
    });

    // Redireciona para a página inicial quando o SnackBar for fechado
    snack.afterDismissed().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  voltar() {
    // Função que é chamada ao clicar no botão "Voltar"
    this.router.navigate(['/']); // Redireciona para a página inicial
  }
}
