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
  clientId: number = -1;
  client: Client | null = null;
  errorMessage: string = '';

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      empresa: [''],
      solicitacao: [''] // Adicionando o campo solicitacao
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientId = id ? Number(id) : -1;

    if (this.clientId === -1) {
      this.errorMessage = 'Cliente não encontrado';
      return;
    }

    this.loadClient();
  }

  loadClient(): void {
    if (this.clientId !== -1) {
      this.clientService.getClientById(this.clientId).subscribe(
        (data) => {
          this.client = data;
          this.clientForm.patchValue({
            id: this.client.id,
            nome: this.client.nome,
            email: this.client.email,
            telefone: this.client.telefone || '',
            empresa: this.client.empresa || '',
            solicitacao: this.client.solicitacao || '' // Garantindo que solicitacao seja preenchido
          });

          console.log('Dados carregados no formulário:', this.clientForm.value);
        },
        (error) => {
          this.errorMessage = 'Erro ao carregar o cliente para edição.';
          console.error('Erro ao carregar cliente', error);
        }
      );
    }
  }

  saveClient(): void {
    if (this.clientForm.valid) {
      const updatedClient = this.clientForm.value;

      console.log('Dados do cliente enviados:', updatedClient);

      this.clientService.saveClient(updatedClient).subscribe(
        (response) => {
          console.log('Cliente atualizado com sucesso', response);
          this.router.navigate(['/clientes']);
        },
        (error) => {
          this.errorMessage = `Erro ao salvar cliente: ${error.message}`;
          console.error('Erro ao salvar cliente', error);
        }
      );
    }
  }
}
