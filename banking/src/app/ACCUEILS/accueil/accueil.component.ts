import {Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/SERVICES/authentification/authentication.service';
import { TokenStorageService } from 'src/app/SERVICES/token/storage';
import { UserService } from 'src/app/SERVICES/user/user.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
 
  constructor(private router: Router,private authenticationService: AuthenticationService ,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  signIn2(email, pwd, role){
    if(role == 'CLIENT'){
      this.router.navigate(['/mycompte'  ]);
    }
    if(role == 'AGENT'){
      this.router.navigate(['/agentBancaire'  ]);
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authenticationService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  // login(loginForm:NgForm){
  //   this.userService.login(loginForm.value).subscribe(
  //     (response)=>{
  //       console.log(response);
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }

  //   )
    

  // }
}
