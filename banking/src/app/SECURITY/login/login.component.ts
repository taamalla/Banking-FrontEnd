import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {createLocalizeStatements} from '@angular/compiler/src/render3/view/i18n/localize_utils';
import { UserService } from 'src/app/SERVICES/user/user.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../serviceGuards/auth.service';
import { AuthenticationService } from 'src/app/SERVICES/authentification/authentication.service';
import { User } from 'src/app/ENTITIES/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validation = true;
  deconnected = true;
  constructor(private  router: Router, private userService: UserService,private http:HttpClient,private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.deconnected = false;
    setTimeout(() => {
      this.deconnected = true;
    }, 3500);

  }
 signIn(form){
    this.auth.login(form.username, form.pwd);
       }
  // }


}
