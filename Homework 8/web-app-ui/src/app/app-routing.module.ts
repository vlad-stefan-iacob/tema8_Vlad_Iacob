import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {GetTodosComponent} from "./components/get-todos/get-todos.component";
import {GetOneTodoComponent} from "./components/get-one-todo/get-one-todo.component";

const routes: Routes = [
  {path: '', component: GetTodosComponent},
  {path: 'get-one-todo/:id', component: GetOneTodoComponent},
  {path: 'add-todo', component: AddTodoComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
