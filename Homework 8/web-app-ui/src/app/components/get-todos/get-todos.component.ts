import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-get-todos',
  templateUrl: './get-todos.component.html',
  styleUrls: ['./get-todos.component.css']
})
export class GetTodosComponent implements OnInit{
  constructor(private toDoService: TodoService) {}

  toDosList: Todo[] = [];
  getAllTodos() {
    this.toDoService.getAllToDos().subscribe(elements => this.toDosList = elements)
  }

  deleteToDo(id: number) {
    return this.toDoService
      .deleteToDo(id)
      .subscribe(element => {
        this.getAllTodos();
      });
  }

  ngOnInit() {
    this.getAllTodos();
  }

  getOneToDo(id: number): void {
    this.toDoService.viewToDoPage(id)
  }
}
