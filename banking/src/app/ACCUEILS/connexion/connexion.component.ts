import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../SERVICES/user/user.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted  =  false;
  listeUser: any;
  user;
  userOk: any;
  idEnt = '';
  connexionForm = true;
  errorMessage = false;
  email = document.getElementById('email');
  pwd = document.getElementById('password');
  role = document.getElementById('role');
  constructor( private serviceUser: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /* this.authForm  =  this.formBuilder.group({
       email: ['', Validators.required],
       password: ['', Validators.required],
       role: ['', Validators.required]
     });*/
     this.serviceUser.getAllUsers().subscribe((res) => {
       this.listeUser = res;
       console.log('----------LISTUSER---------');
       console.log(this.listeUser);
       console.log('---------------------------');
     });
   }

   signIn2(email, pwd, role){
    if(role == 'CLIENT'){
      this.router.navigate(['/mycompte'  ]);
    }
    if(role == 'AGENT'){
      this.router.navigate(['/agentBancaire'  ]);
    }
   
  }










  /* signIn(email, pwd, role){
     let x;
     this.serviceUser.getAllUsers().subscribe((res) => {
       this.listeUser = res ['hydra:member'];
       for (x of this.listeUser){
         if (x.email === email && x.password === pwd && x.role === role) {
           if ( role === 'organisateur' ){
             localStorage.setItem('organisateurKey', 'organisateur');
             this.router.navigate(['/organisateur']);
             break;
           }else if ( role === 'entreneur' ){
             this.router.navigate(['/entreneur']);
             localStorage.setItem('entreneurKey', 'entreneur');
             break;
           }else if (role === 'responsableTicket' ){
             this.router.navigate(['/ticket']);
             localStorage.setItem('responsableTicketKey', 'responsableTicket');
             break;
           }else if ( role === 'gestionneurBlog' ){
             this.router.navigate(['/blog']);
             localStorage.setItem('gestionneurBlogtKey', 'gestionneurBlog');
             break;
           }
         }
         else {
           this.userOk = false;
         }
       }
     });
     if (this.userOk === false){
       alert('user not found !');
     }
     this.userOk = true;
     this.user = this.listeUser.find(x => x.email === this.email && x.password === this.pwd && x.role === this.role);
     if ( this.user != null && this.user !== '' /!*this.listeUser.find(x => x.email === email && x.password === pwd && x.role === role)*!/ )
       {
           this.router.navigate(['/' + role ]);
       //  this.serviceUser.signIn(this.authForm.value);
       }
       else
         {
           alert('User not found...');
         }
  }
  /*signIn(email, pwd, role){
    if (email === 'takwira' && pwd === 'takwira' && role === 'organisateur' ){
      localStorage.setItem('organisateurKey', 'organisateur');
      this.router.navigate(['/organisateur']);
    }else if (email === 'takwira' && pwd === 'takwira' && role === 'entreneur' ){
      this.router.navigate(['/entreneur']);
      localStorage.setItem('entreneurKey', 'entreneur');
    }else if (email === 'takwira' && pwd === 'takwira' && role === 'responsableTicket' ){
      this.router.navigate(['/ticket']);
      localStorage.setItem('responsableTicketKey', 'responsableTicket');
    }else if (email === 'takwira' && pwd === 'takwira' && role === 'gestionneurBlog' ){
      this.router.navigate(['/blog']);
      localStorage.setItem('gestionneurBlogtKey', 'gestionneurBlog');
    }*/
     /*this.serviceUser.getAllUsers().subscribe((res) => {
       this.listeUser = res;
       if (this.listeUser.length !== 0){
         this.user = this.listeUser.find(x => x.email === email && x.password === pwd && x.role === role);
         if ( this.user != null && this.user !== ''){
         localStorage.setItem('idUser', this.user.id);
         this.router.navigate(['/admin']);
         }
         else {
           this.connexionForm = false;
         }
       }
       else {
         this.connexionForm = false;
       }
     });*/
 /* signIn2(email, pwd, role){
    this.serviceUser.getAllUsers().subscribe((res) => {
      this.listeUser = res ['hydra:member'];
      this.user = this.listeUser.find(x => x.email === email && x.password === pwd && x.role === role);
      if (this.user === undefined){
        alert('user not found');
      }
      if (this.user !== null ){
        if (this.user.role === 'organisateur') {
            localStorage.setItem('organisateurKey', this.user.id);
            this.router.navigate(['/organisateur/' + this.user.id ]);
        } else if (this.user.role  === 'entreneur') {
            this.router.navigate(['/entreneur/' + this.user.id]);
            localStorage.setItem('entreneurKey',  this.user.id);
        } else if (this.user.role  === 'responsableTicket') {
            this.router.navigate(['/ticket/' + this.user.id]);
            localStorage.setItem('responsableTicketKey', this.user.id);
        } else if (this.user.role  === 'gestionnaireBlog') {
            this.router.navigate(['/blog/' + this.user.id]);
            localStorage.setItem('gestionneurBlogtKey', this.user.id);
        }
      }
    });
  }*/
}
