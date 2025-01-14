import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  clientForm: FormGroup;
  clientId: number = -1;  // Inicializa com um valor inválido (-1)
  client: Client | null = null;
  errorMessage: string = '';

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicializando o formulário de edição
    this.clientForm = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      empresa: ['']
    });
  }

  ngOnInit(): void {
    // Obtendo o id do cliente a partir da URL
    const id = this.route.snapshot.paramMap.get('id');
    this.clientId = id ? Number(id) : -1;  // Atribui -1 caso o id não seja encontrado

    if (this.clientId === -1) {
      this.errorMessage = 'Cliente não encontrado';
      return; // Se não encontrar o id, não tenta carregar o cliente
    }

    this.loadClient();  // Carregar os dados do cliente
  }

  loadClient(): void {
    if (this.clientId !== -1) {
      // Chama o serviço para obter os dados do cliente
      this.clientService.getClientById(this.clientId).subscribe(
        (data) => {
          this.client = data;
          // Preenche o formulário com os dados do cliente
          this.clientForm.patchValue({
            id: this.client.id,
            nome: this.client.nome,
            email: this.client.email,
            telefone: this.client.telefone || '',
            empresa: this.client.empresa || ''
          });
        },
        (error) => {
          // Trata o erro de carregamento
          this.errorMessage = 'Erro ao carregar o cliente para edição.';
          console.error('Erro ao carregar cliente', error);
        }
      );
    }
  }

  saveClient(): void {
    if (this.clientForm.valid) {
      const updatedClient = this.clientForm.value;
      console.log('Dados do cliente enviados:', updatedClient);  // Verifique os dados aqui

      // Se o email foi alterado, verifica a duplicidade
      if (updatedClient.email !== this.client?.email) {
        this.clientService.checkEmailDuplicity(updatedClient.email).subscribe(
          (isDuplicate) => {
            if (isDuplicate) {
              this.errorMessage = 'Este email já está cadastrado. Por favor, use outro.';
            } else {
              this.saveClientToBackend(updatedClient);
            }
          },
          (error) => {
            this.errorMessage = 'Erro ao verificar duplicidade do email.';
            console.error('Erro ao verificar duplicidade do email', error);
          }
        );
      } else {
        // Se o email não foi alterado, salva diretamente
        this.saveClientToBackend(updatedClient);
      }
    }
  }

  saveClientToBackend(updatedClient: Client): void {
    this.clientService.saveClient(updatedClient).subscribe(
      () => {
        this.router.navigate(['/clientes']);
      },
      (error) => {
        this.errorMessage = `Erro ao salvar cliente: ${error.message}`;
        console.error('Erro ao salvar cliente', error);
        console.error('Detalhes da resposta do erro:', error);  // Exibe detalhes do erro
      }
    );
  }
}
