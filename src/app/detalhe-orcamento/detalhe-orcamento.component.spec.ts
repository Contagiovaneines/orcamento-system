import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheOrcamentoComponent } from './detalhe-orcamento.component';

describe('DetalheOrcamentoComponent', () => {
  let component: DetalheOrcamentoComponent;
  let fixture: ComponentFixture<DetalheOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheOrcamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
