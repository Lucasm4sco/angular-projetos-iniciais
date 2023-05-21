import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ListarTarefasComponent } from './listar-tarefas.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ListarTarefasComponent', () => {
  let component: ListarTarefasComponent;
  let fixture: ComponentFixture<ListarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTarefasComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ListarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Garante que o componente listar tarefas foi criado', () => {
    expect(component).toBeTruthy();
  });
});
