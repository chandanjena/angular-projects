import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MyhttpService {

  constructor(private http: Http) { }

  getData(){
    //map transform the Response observable using and response.json(),
    //and that returns an Observable as well
    return this.http.get('https://cjrecipebook.firebaseio.com/title.json')
        .map((response: Response) => response.json());
  }

  sendData(user: any){
    const body = JSON.stringify(user);
    const myheaders = new Headers();
    myheaders.append('Content-Type','application/json');
    return this.http.post('https://cjrecipebook.firebaseio.com/data.json', body, {
      headers: myheaders})
      .map((response: Response) => response.json());
  }

  getMyData(){
    return this.http.get('https://cjrecipebook.firebaseio.com/data.json')
        .map((response: Response) => response.json());
  }

  getTopData(){
    let obj = {
        table: 'fs_tech_request',
        filter: [{"column":"Status", "value":["Open","Rejected","Pending Approval"]},
            {"column":"OrgId","value":"2"}]
    };

    let req = {"queryparam": obj};
    //let queryparam = {};

    let querystring = JSON.stringify(req);

    return this.http.get('http://localhost:3000/api/querydata/' +querystring)
        .map((response: Response) => response.json());
  }

}
