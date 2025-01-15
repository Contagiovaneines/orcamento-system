import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSucessoComponent } from './cadastro-sucesso.component';

describe('CadastroSucessoComponent', () => {
  let component: CadastroSucessoComponent;
  let fixture: ComponentFixture<CadastroSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
