import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  inProgress: string[] = [];
  todo: string[] = [];
  done: string[] = [];
  newInProgressTask: string = '';
  newToDoTask: string = '';

  
  addInProgressTask() {
    if (this.newInProgressTask.trim() !== '') {
      this.inProgress.push(this.newInProgressTask);
      this.newInProgressTask = '';
    }
  }

  addToDoTask() {
    if (this.newToDoTask.trim() !== '') {
      this.todo.push(this.newToDoTask);
      this.newToDoTask = '';
    }
  }

  drop(event: any, targetList: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
