import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

import { cilPen, cilTrash, cilCheckAlt } from '@coreui/icons';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: [
    './listar-tarefas.component.scss',
    '../shared/padrao.scss'
  ]
})
export class ListarTarefasComponent implements OnInit {

  icons = { cilPen, cilTrash, cilCheckAlt };
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: Event,  tarefa: Tarefa): void {
    $event.preventDefault();

    if(!confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
      return

    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
  }

  alterar(tarefa: Tarefa): void {
    this.tarefaService.concluir(tarefa.id);
    this.tarefas = this.listarTodos();
  }
}
