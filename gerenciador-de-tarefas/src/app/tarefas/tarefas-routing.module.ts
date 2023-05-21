import { Routes } from "@angular/router";

import { ListarTarefasComponent } from "./listar";
import { CadastrarTarefasComponent } from "./cadastrar";
import { EditarTarefasComponent } from "./editar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
    }
];