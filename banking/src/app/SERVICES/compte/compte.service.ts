import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  url  = 'http://127.0.0.1:8085/...';
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return header;
  }
  constructor() { }

  /*   ------- TO DO  ASMA  -------    */ 


}
