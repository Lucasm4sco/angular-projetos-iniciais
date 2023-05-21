import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefasComponent } from './cadastrar-tarefas.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

describe('CadastrarTarefasComponent', () => {
  let component: CadastrarTarefasComponent;
  let fixture: ComponentFixture<CadastrarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTarefasComponent],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(CadastrarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Garente que o componente de cadastrar tarefas foi criado', () => {
    expect(component).toBeTruthy();
  });
});
