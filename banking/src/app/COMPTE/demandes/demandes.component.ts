import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  closeResult = '';
  searchedKeyword: any;
  listMatch;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  demandeCheque(content) { 
    this.modalService.open(content,   {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }
  demandeCredit(content1) { 
    this.modalService.open(content1,   {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }
  virement(content2) { 
    this.modalService.open(content2,   {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }

}
