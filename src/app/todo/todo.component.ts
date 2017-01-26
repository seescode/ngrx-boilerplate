import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  todoClick(todo) {
    console.log(todo.value);
    this.onClick.emit(todo.value);
  }

}
