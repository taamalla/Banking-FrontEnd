import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../serviceGuards/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate() {
    if (this.authService.isLoggedIn()){
      return true;
    }
   else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
