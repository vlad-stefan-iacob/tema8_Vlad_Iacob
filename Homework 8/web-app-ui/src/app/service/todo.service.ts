import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = "http://localhost:4000/todo"
  constructor(private http: HttpClient, private router: Router) {
  }

  viewToDoPage(id: number) : void {
    this.router.navigate(['/get-one-todo', id]);
  }

  viewAllToDos() : void {
    this.router.navigate(['/']);
  }

  getAllToDos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getOneToDoById(id: number) : Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  addToDo(toDo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, toDo);
  }

  updateToDo(toDo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.url}/${toDo.id}`, toDo);
  }

  deleteToDo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }
}
