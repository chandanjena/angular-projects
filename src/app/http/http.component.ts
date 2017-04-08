import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './myhttp.service';
import { Response } from '@angular/http';

@Component({
  selector: 'fa-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  private items: any[] = [];

  constructor(private httpService: MyhttpService) { }

  ngOnInit() {
    //subscribe to the Observable returned by getData method
    this.httpService.getData()
            .subscribe(
              (data: any) => console.log(data)
            )
  }

  onSubmit(username: string, email: string){
    this.httpService.sendData({username: username, email: email})
      .subscribe((data: any) => console.log(data))
  }

  onGetData(){
    this.httpService.getMyData()
      .subscribe(
        (data: any) => {
          const tempArray = [];
          console.log(data);
          for(let key in data){
            tempArray.push(data[key]);
          }
          this.items = tempArray;
        }
      )
  }

  onGetTopData(){
      this.httpService.getTopData()
        .subscribe(
            (data: any) => {
                console.log(data);
            }
        )
  }

}
