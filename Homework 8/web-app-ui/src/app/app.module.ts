import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { GetTodosComponent } from './components/get-todos/get-todos.component';
import { GetOneTodoComponent } from './components/get-one-todo/get-one-todo.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./service/todo.service";
import {HttpClientModule} from "@angular/common/http";
import {RoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    GetTodosComponent,
    GetOneTodoComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
