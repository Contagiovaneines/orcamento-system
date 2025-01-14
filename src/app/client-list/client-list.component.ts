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
  clientToEdit: Client | null = null;
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
      console.log('Clientes carregados:', this.clients);  // Verifique se os clientes são carregados
    });
  }

  editClient(client: Client) {
    this.clientToEdit = { ...client }; // Cria uma cópia do cliente para edição
  }

  saveClient() {
    if (this.clientToEdit) {
      this.clientService.saveClient(this.clientToEdit).subscribe(
        (response) => {
          this.snackBar.open('Alterações salvas com sucesso!', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-success']
          });
          this.clientToEdit = null;
          this.loadClients();
        },
        (error) => {
          this.snackBar.open('Erro ao salvar as alterações. Tente novamente.', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-error']
          });
        }
      );
    }
  }

  confirmDelete(client: Client) {
    this.clientToDelete = client; // Armazena o cliente a ser excluído
    console.log('Confirmando exclusão do cliente:', this.clientToDelete);

    // Abre o modal
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Instancia o modal
      console.log('Abrindo o modal de confirmação de exclusão');
      modal.show(); // Exibe o modal
    }
  }

  deleteClient() {
    console.log('Iniciando a exclusão do cliente:', this.clientToDelete);

    if (this.clientToDelete) {
      this.clientService.deleteClient(this.clientToDelete.id).subscribe(
        () => {
          this.snackBar.open('Cliente excluído com sucesso!', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-success']
          });

          // Remover o cliente da lista localmente
          this.clients = this.clients.filter(client => client.id !== this.clientToDelete!.id);
          console.log('Cliente excluído com sucesso:', this.clientToDelete);

          this.clientToDelete = null;

          // Fecha o modal após a exclusão
          this.closeModal();
        },
        (error) => {
          this.snackBar.open('Erro ao excluir o cliente. Tente novamente.', 'Fechar', {
            duration: 5000,
            panelClass: ['snack-error']
          });
        }
      );
    }
  }

  cancelDelete() {
    console.log('Cancelando a exclusão e fechando o modal');
    this.closeModal();
  }

  closeModal() {
    // Fecha o modal
    const modalElement = document.getElementById('deleteModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Instancia o modal
      modal.hide(); // Fecha o modal
      console.log('Modal fechado');
    }
  }
}
