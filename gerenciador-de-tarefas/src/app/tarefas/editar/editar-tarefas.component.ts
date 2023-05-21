import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: [
      '../shared/form.scss',
      '../shared/padrao.scss'
    ]
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private router: Router,
    private tarefaService: TarefaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.tarefa  = this.tarefaService.buscarPorID(id);
  }

  atualizar(): void {
    if (!this.formTarefa.form.valid) 
      return 
    
    this.tarefaService.atualizar(this.tarefa);
    this.router.navigate(['/tarefas']);
  }
}
