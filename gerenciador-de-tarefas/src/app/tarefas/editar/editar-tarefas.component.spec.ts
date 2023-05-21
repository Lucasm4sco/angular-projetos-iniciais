import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditarTarefasComponent } from './editar-tarefas.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('EditarTarefasComponent', () => {
  let component: EditarTarefasComponent;
  let fixture: ComponentFixture<EditarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTarefasComponent],
      imports: [FormsModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(EditarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Garante que o componente de editar tarefas foi criado', () => {
    expect(component).toBeTruthy();
  });
});
