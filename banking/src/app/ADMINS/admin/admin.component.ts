import { Component, OnInit } from '@angular/core';
import {UserService} from '../../SERVICES/user/user.service';
import {User} from '../../ENTITIES/user';
import {ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import * as XLSX from 'xlsx';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  afficherListeAgents = true;
  afficherListeClients = true;
  afficherAjoutagent = true;
  searchedKeyword: any;
  
  @ViewChild('pdfTable') pdfTable: ElementRef;
  fileName = 'Utilisateur.xlsx';
  constructor(private userservice: UserService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
   
  }
   /* ------------------------   Aside  ------------------------- */
   accueil(){
    this.afficherAjoutagent = true;
    this.afficherListeClients = true;
    this.afficherListeAgents = true;
   }
   formulaireAjoutAgent(){
    this.afficherListeClients = true;
    this.afficherListeAgents = true;
    this.afficherAjoutagent = false;
  }
  tableListeAgents(){
    this.afficherAjoutagent = true;
    this.afficherListeClients = true;
    this.afficherListeAgents = false;
  }
  tableListeClients(){
    this.afficherAjoutagent = true;
    this.afficherListeAgents =true;
    this.afficherListeClients = false;
  }
 
 

  /* ------------------------   Logout admin  ------------------------- */
  logoutAdmin(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
