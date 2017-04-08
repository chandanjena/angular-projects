import { Component} from '@angular/core';

@Component({
  selector: 'fa-twoway-data-binding',
  template: `
    <input type = "text" [(ngModel)] = "person.name">
    <input type = "text" [(ngModel)] = "person.name">
  `,
  styles: []
})
export class TwowayDataBindingComponent {
    person = {
        name: "John",
        age: 30
    };

}
