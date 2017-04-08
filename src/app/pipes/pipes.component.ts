import { Component, OnInit } from '@angular/core';
import { DoublePipe } from './double.pipe';

@Component({
  selector: 'fa-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
    private someText: string = "Chandan";
    private someDate: Date = new Date(2017, 3, 24);
  constructor() { }

  ngOnInit() {
  }

}
