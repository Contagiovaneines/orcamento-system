import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from '../services/client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importando MatSnackBar

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client: Client = { id: 0, nome: '', email: '' };

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar // Injetando MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.clientService.getClientById(id).subscribe((data) => (this.client = data));
    }
  }

  saveClient() {
    this.clientService.saveClient(this.client).subscribe(
      (response) => {
        console.log('Cliente salvo com sucesso', response);

        // Exibindo mensagem de sucesso
        this.snackBar.open('Cadastro realizado! Entraremos em contato em 3 dias.', 'Fechar', {
          duration: 5000, // Duração de 5 segundos
          panelClass: ['snack-success']
        });

        // Limpando o formulário para novo cadastro
        this.client = { id: 0, nome: '', email: '' };
      },
      (error) => {
        console.error('Erro ao salvar cliente', error);

        // Exibindo mensagem de erro quando email já estiver cadastrado
        if (error.error && error.error.message) {
          if (error.error.message.includes('Já existe um cliente com o email informado')) {
            this.snackBar.open('Este email já está cadastrado. Tente outro.', 'Fechar', {
              duration: 5000,
              panelClass: ['snack-error']
            });
          } else {
            this.snackBar.open('Erro ao salvar cliente. Tente novamente.', 'Fechar', {
              duration: 5000,
              panelClass: ['snack-error']
            });
          }
        }
      }
    );
  }
}
