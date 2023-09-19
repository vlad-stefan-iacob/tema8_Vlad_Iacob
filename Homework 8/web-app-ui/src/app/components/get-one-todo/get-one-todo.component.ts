import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../service/todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-get-one-todo',
  templateUrl: './get-one-todo.component.html',
  styleUrls: ['./get-one-todo.component.css']
})
export class GetOneTodoComponent implements OnInit{
  id: string | null = "";
  toDo: Todo = {
    id: 0,
    title: "",
    description: "",
    completed: false
  };
  constructor(private toDoService: TodoService, private route: ActivatedRoute) {}

  getOneToDo(id: string | null) {
    let idNumber = 0;
    if (typeof id === "string") {
      idNumber = Number.parseInt(id)
    }
    this.toDoService
      .getOneToDoById(idNumber)
      .subscribe(element => this.toDo = element)
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.getOneToDo(this.id)
  }
}
