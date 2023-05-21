import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas? JSON.parse(tarefas) : []
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorID(id: number): Tarefa {
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefaAtual: Tarefa): void {
    const tarefas = this.listarTodos();
    const tarefasAtualizadas = tarefas.map(tarefa => tarefa.id === tarefaAtual.id ? tarefaAtual : tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefasAtualizadas);
  }

  remover(id: number): void {
    const tarefas = this.listarTodos();
    const tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefasAtualizadas);
  }

  concluir(id: number): void {
    const tarefas = this.listarTodos();
    const tarefasAtualizadas = tarefas.map(tarefa => {
      if (tarefa.id === id)
        tarefa.concluida = !tarefa.concluida;

      return tarefa
    })
    localStorage['tarefas'] = JSON.stringify(tarefasAtualizadas);
  }
}
