import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://127.0.0.1:8085/api/auth';
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return header;
  }
  constructor(private  http: HttpClient) { }
  requestHeader = new HttpHeaders(
    {"No-Auth": "true"}
  );


  public login(loginData){
    return this.http.post(this.url + "/signin", loginData,{headers: this.requestHeader});
  }
  
  getUserByUsername(username){
    return  this.http.get(this.url+"?cin="+username)
    }
    
  getAllUsers(){
    return this.http.get(this.url);
  }
  getOneUser(id){
    return this.http.get(this.url + '/' + id);
  }
  addUser(f){
    let options = {
      headers: this._getHeaders()
    };
    return this.http.post(this.url+ '/signup' , f, options );
  }
  deleteUser(id){
    return this.http.delete(this.url + '/' + id);
  }
  updateUser(id, user){
    let options = {
      headers: this._getHeaders()
    };
    return this.http.put(this.url + '/' + id, user, options);
  }
}
