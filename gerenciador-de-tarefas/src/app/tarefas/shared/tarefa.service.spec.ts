import { TestBed } from '@angular/core/testing';

import { TarefaService } from './tarefa.service';
import { Tarefa } from './';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('Garante que o service de tarefas foi criado', () => {
    expect(service).toBeTruthy();
  });

  it('Garante que o cadastro de tarefas está funcionando', () => {
    /* limpar localStorage antes dos testes */
    localStorage.clear();
    /* criando tarefas e armazenando */
    const primeiraTarefa = new Tarefa(1, 'Arrumar a cama');
    const segundaTarefa = new Tarefa(2, 'Limpar a casa');
    service.cadastrar(primeiraTarefa);
    service.cadastrar(segundaTarefa);
    /* recebendo tarefas e verificando valores */
    const tarefas = service.listarTodos();
    const tarefasForamCriadas = JSON.stringify(tarefas) === JSON.stringify([primeiraTarefa, segundaTarefa]);
    expect(tarefasForamCriadas).toBeTrue();
  })

  it('Garante que atualizar tarefas está funcionando', () => {
    /* limpar localStorage antes dos testes */
    localStorage.clear();
    /* criando tarefas e armazenando */
    const primeiraTarefa = new Tarefa(1, 'Arrumar a cama');
    const segundaTarefa = new Tarefa(2, 'Limpar a casa');
    service.cadastrar(primeiraTarefa);
    service.cadastrar(segundaTarefa);
    /* atualizando tarefas */
    primeiraTarefa.nome = 'Lavar o carro';
    segundaTarefa.nome = 'Arrumar a sala';
    service.atualizar(primeiraTarefa);
    service.atualizar(segundaTarefa);
    /* recebendo tarefas atuais e verificando valores */
    const tarefas = service.listarTodos();
    const tarefasForamAtualizadas = JSON.stringify(tarefas) === JSON.stringify([primeiraTarefa, segundaTarefa]);
    expect(tarefasForamAtualizadas).toBeTrue();
  })

  it('Garante que o concluir/desfazer de tarefas está funcionando', () => {
    /* limpar localStorage antes dos testes */
    localStorage.clear();
    /* criando tarefas e armazenando */
    const primeiraTarefa = new Tarefa(1, 'Arrumar a cama');
    const segundaTarefa = new Tarefa(2, 'Limpar a casa');
    service.cadastrar(primeiraTarefa);
    service.cadastrar(segundaTarefa);
    /* concluindo tarefas criadas */
    service.concluir(primeiraTarefa.id);
    service.concluir(segundaTarefa.id);
    /* recebendo tarefas atuais e verificando valores */
    const tarefas = service.listarTodos();
    tarefas.forEach(tarefa => expect(tarefa.concluida).toBeTrue());
    /* desfazendo a conclusão das tarefas criadas */
    service.concluir(primeiraTarefa.id);
    service.concluir(segundaTarefa.id);
    /* recebendo tarefas atuais e verificando valores */
    const tarefasAtualizadas = service.listarTodos();
    tarefasAtualizadas.forEach(tarefa => expect(tarefa.concluida).toBeFalse());
  })

  it('Garante que a exclusão de tarefas está funcionando', () => {
    /* limpar localStorage antes dos testes */
    localStorage.clear();
    /* criando tarefas e armazenando */
    const primeiraTarefa = new Tarefa(1, 'Arrumar a cama');
    const segundaTarefa = new Tarefa(2, 'Limpar a casa');
    service.cadastrar(primeiraTarefa);
    service.cadastrar(segundaTarefa);
    /* Excluindo uma das tarefas criadas */
    service.remover(segundaTarefa.id);
    /* procurando segunda tarefa e verificando se existe */
    const tarefa = service.buscarPorID(segundaTarefa.id);
    expect(tarefa).toBeUndefined();
  })
});
