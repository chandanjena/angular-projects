import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = "This is a string";
  numberInterpolation = 2;

  onCustomClicked(value: string){
    alert(value);
  }
}
