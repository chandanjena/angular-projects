import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl:'./app.component.html'
  template:`
      <h1>This is the ROOT component!!!</h1>
      <fa-other></fa-other>
      <fa-another>
        <div>
          <h2>Some text</h2>
          <h3>For first ANOTHER component</h3>
        </div>
      </fa-another>
        <div>
          <h2>This text appears by reusing ANOTHER component!!!</h2>
        </div>
      <fa-another>
      </fa-another>
      <fa-databinding></fa-databinding>
      <fa-lifecycle></fa-lifecycle>
      <hr>
      <fa-http></fa-http>
      <hr>
      <fa-pipes></fa-pipes>
  `,
  styles: [`
    h1 {
      color: red;
    }
    `]
})
export class AppComponent {
  title = 'App works!!!';
}
