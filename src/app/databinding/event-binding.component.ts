import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click) = "onClicked()">Click Me!</button>
    <button (click) = "onCustomClicked()">Custom Event Click Me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked(){
    alert('It worked!!');
  }

  @Output() clicked = new EventEmitter();
  onCustomClicked(){
    this.clicked.emit('Custom event binding works!!!!!');
  }

}
