import { TodoService } from './../../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos: Todo[]
  constructor( private todoService:TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    this.todoService.getTodos().subscribe(data => {
      this.todos = data
    })
  }

}
