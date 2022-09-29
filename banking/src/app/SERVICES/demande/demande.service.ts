import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  url  = 'http://127.0.0.1:8085/...';
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return header;
  }

  constructor(private http: HttpClient) { }

  /*   ------- TO DO  HABIB  -------    */ 



}
