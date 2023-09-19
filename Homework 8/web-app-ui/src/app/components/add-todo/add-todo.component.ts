import { Component } from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../service/todo.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
  }

  toDoForm = this.formBuilder.group({
    title: [''],
    description: [''],
    completed: [false]
  });
  addToDo() {
    this.todoService
      .addToDo(this.toDoForm.value as Todo)
      .subscribe(element => this.todoService.viewToDoPage(element.id));

  }
}
