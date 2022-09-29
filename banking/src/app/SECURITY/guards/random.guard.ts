import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from'src/app/SERVICES/authentification/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthenticationService, private router: Router) { }


  canActivate(
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canLoad();
  }
  canLoad(
    ): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
      return this.authService.isLoggedIn();  }
}
