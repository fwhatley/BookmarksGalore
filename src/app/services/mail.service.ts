import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  public constructor(private httpClient: HttpClient) {}

  public sendMail() {

    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    this.httpClient.post<any>('https://us-central1-bookmarksgalore.cloudfunctions.net/emailMessage',{title: "Hey bro", message: "this is my msg"}, {headers}).subscribe(data => {
      console.log("email sent");
      console.log(data);
    })
  }

}
