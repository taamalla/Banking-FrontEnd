import { Component, OnInit } from '@angular/core';

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
import { User } from 'src/app/ENTITIES/user';
import { UserService } from 'src/app/SERVICES/user/user.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  closeResult = '';
  searchedKeyword: any;
  success = true;
  suppression = true;
  listeUser;
  oneUser;
  idDeleteUser;
  userDelete;
  erreurModifUser = true;
  public userModif: User = new User();
  title = 'htmltopdf';
  @ViewChild('pdfTable') pdfTable: ElementRef;
  fileName = 'Utilisateur.xlsx';
  constructor(private userservice: UserService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }
   /* ----------------------  Delete user  ---------------------- */
   openDeleteUser(suppressionUser, user) {
    this.idDeleteUser = user.id;
    this.userDelete = user;
    this.modalService.open(suppressionUser).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult =  `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ConfirmDeleteUser(id){
    this.userservice.deleteUser(id).subscribe(() => {
      this.modalService.dismissAll(this.getDismissReason(ModalDismissReasons.ESC));
      this.onreload();
      this.suppression = false;
      setTimeout(() => {
        this.suppression = true;
      }, 2000);
    });
  }
  annulerDeleteUser(){
    this.modalService.dismissAll(this.getDismissReason(ModalDismissReasons.ESC));
  }
  /* ----------------------  Update user  ---------------------- */
  enEditUser(content) {
   
    this.erreurModifUser = true;
    this.modalService.open(content,   {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult =  `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  editUser(id, userModif){
    if (userModif.name === '' || userModif.lastname === '' || userModif.password === '' || userModif.email === '' || userModif.adress === '' ){
      this.erreurModifUser = false;
    }else {
      this.userservice.updateUser(id, userModif).subscribe(() => {
        this.modalService.dismissAll(this.getDismissReason(ModalDismissReasons.ESC));
        this.erreurModifUser = true;
        this.success = false;
        this.onreload();
        setTimeout(() => {
          this.success = true;
        }, 2500);
      });
    }
  }
  /* ----------------------   List user  ----------------------- */
  onreload(){
    this.userservice.getAllUsers().subscribe((data) => {
      this.listeUser = data ['hydra:member'];
    });
    console.log('------Users----' , this.listeUser);
  }
  /* -------------------------   pdf   ------------------------- */
  public downloadAsPDF() {
    const doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
    const html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  }
  /* ------------------------   excel  ------------------------- */
  exportexcel(): void {
    const elements = document.getElementById('pdfTable');
    const wc: XLSX.WorkSheet = XLSX.utils.table_to_sheet(elements);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet( wb, wc, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
  /* ----------------------  Close modal  ---------------------- */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.onreload();
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.onreload();
      return 'by clicking on a backdrop';
    } else {
      this.onreload();
      return `with: ${reason}`;
    }
  }
  logoutAdmin(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
