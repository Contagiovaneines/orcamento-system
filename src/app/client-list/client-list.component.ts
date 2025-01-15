import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from '../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];
  clientToDelete: Client | null = null;

  constructor(
    private clientService: ClientService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  confirmDelete(client: Client) {
    this.clientToDelete = client;
  }

  deleteClient() {
    if (this.clientToDelete && this.clientToDelete.id !== undefined) {
      const clientId = this.clientToDelete.id;

      this.clientService.deleteClient(clientId).subscribe(
        () => {
          this.snackBar.open('Cliente excluído com sucesso!', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-success']
          });

          this.clients = this.clients.filter(client => client.id !== clientId);
          this.clientToDelete = null;
        },
        () => {
          this.snackBar.open('Erro ao excluir o cliente. Tente novamente.', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-error']
          });
        }
      );
    } else {
      this.snackBar.open('Erro: Cliente inválido ou ID não encontrado.', 'Fechar', {
        duration: 5000,
        panelClass: ['snack-error']
      });
    }
  }
}
