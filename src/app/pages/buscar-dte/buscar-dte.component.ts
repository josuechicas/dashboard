

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CreditoFiscalService } from '../../services/credito-fiscal.service';
import { CFiscalModel } from '../../models/cfiscal.model';
@Component({
  selector: 'app-buscarDte',
  templateUrl: './buscar-dte.component.html',
  styleUrls: ['./buscar-dte.component.scss']
})
export class BuscarDteComponent implements OnInit {

  title = 'Credito Fiscal';
  cfiscales: CFiscalModel[] = [];
 // modalRef = null;

  //cfiscales: CFiscalModel[] = [];

  //id = 0;
  //cudeFe = "";

  //info: any;

  constructor(private token: TokenStorageService,
    private cfiscalService: CreditoFiscalService

    //public cfiscalService: CFiscalService,
    //private _cfiscalService: NgbModal
    ) { }

    ngOnInit() {
      this.cfiscalService.getCFiscal()
      .subscribe( resp => this.cfiscales = resp );

        
       
  
      /*this.userService.getUsers()
      .subscribe( resp => {
        console.log(resp)
        //this.cfiscal = resp;
      } );*/
  
  
  
  
      /*this.cfiscalService.getCFiscal()
      .subscribe(
        (data) => { // Success
          this.cfiscal = data['results'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );*/
    }
  

    /*closeModal() {
      this.modalRef.close();
      
    }
  onClickSearch(content) {
    this.modalRef = this._cfiscalService.open(content, { size: 'lg' })
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  onClickSearchById() {
    return this.cfiscalService.getCFiscal(this.id).subscribe((data) => {
       var result;
       result = data;
       //this.IssuesList = [];
       //this.IssuesList.push(result);
    })
 }

 onClickSearchByCude() {
  this.cfiscalService.getCFiscal()
  .subscribe( resp => this.cfiscales = resp );
  }

  logout() {
    this.token.signOut();
    //window.location.reload();
    window.location.href=("/");
  }*/
}
