import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  isLoggedInEntreneur(){
    return !!localStorage.getItem('entreneurKey');
  }
  isLoggedInOrganisateur(){
    return !!localStorage.getItem('organisateurKey');
  }
  isLoggedInTicket(){
    return !!localStorage.getItem('responsableTicketKey');
  }
  isLoggedInBlog(){
    return !!localStorage.getItem('gestionneurBlogtKey');
  }
}
