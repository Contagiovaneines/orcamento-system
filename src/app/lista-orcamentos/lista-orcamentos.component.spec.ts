import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrcamentosComponent } from './lista-orcamentos.component';

describe('ListaOrcamentosComponent', () => {
  let component: ListaOrcamentosComponent;
  let fixture: ComponentFixture<ListaOrcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaOrcamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
