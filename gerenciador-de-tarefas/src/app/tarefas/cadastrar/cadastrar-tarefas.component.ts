import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: [
    '../shared/form.scss',
    '../shared/padrao.scss'
  ]
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private router: Router,
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (!this.formTarefa.form.valid)
      return

    const id = Math.random();
    this.tarefa.id = id;
    this.tarefaService.cadastrar(this.tarefa);
    this.router.navigate(['/tarefas']);
  }
}
