import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCommunicationService {

  constructor(public http: HttpClient) { }

  sendOrder(jsonArr) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('jsonArr', JSON.stringify(jsonArr));
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/text');
    this.http.post('http://localhost:4201/order', urlSearchParams, { headers: header }).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

}
