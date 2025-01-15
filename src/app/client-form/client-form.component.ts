import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client, ClientService } from '../services/client.service';  // Mudança de Cliente para Client

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client: Client = { nome: '', email: '', solicitacao: '' };  // Mudança de cliente para client
  isEdit = false;

  constructor(
    private clientService: ClientService,  // Mudança de clienteService para clientService
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.clientService.getClientById(id).subscribe(client => {
        this.client = client;
      });
    }
  }

  save(): void {
    if (this.isEdit) {
      this.clientService.saveClient(this.client).subscribe(
        () => {
          this.snackBar.open('Cliente atualizado com sucesso!', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-success']
          });
          this.router.navigate(['/clientes']);
        },
        (error) => {
          this.snackBar.open('Erro ao atualizar o cliente. Tente novamente.', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-error']
          });
        }
      );
    } else {
      // Cadastro de um novo cliente
      this.clientService.saveClient(this.client).subscribe(
        () => {
          const snack = this.snackBar.open('Cadastro realizado! Entraremos em contato em 3 dias.', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-success']
          });

          // Ouvir quando o snack bar for fechado
          snack.afterDismissed().subscribe(() => {
            // Redireciona para a página inicial após fechar o snack bar
            this.router.navigate(['/']);
          });

          // Após o cadastro, redireciona para a página de sucesso
          this.router.navigate(['/cadastro-sucesso']);
        },
        (error) => {
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
}
