import { Component, OnInit } from '@angular/core';
import { CFiscalService } from '../services/cfiscal.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CFiscalModel } from '../models/cfiscal.model';


@Component({
  selector: 'app-issue-list',
  templateUrl: './buscar-cude.component.html',
  styleUrls: ['./buscar-cude.component.css']
})
export class BucarCudeComponent implements OnInit {
  modalRef = null;

  //IssuesList: any = [];
  public IssuesList: Array<any> = [];
  cfiscales: CFiscalModel[] = [];

  id = 0;
  cudeFe = "";



  ngOnInit() {
  }

  constructor(
    public cfiscalService: CFiscalService,
    private _cfiscalService: NgbModal
  ){ }

   // Issues list
  
  closeModal() {
    this.modalRef.close();
    
  }


  onClickSearch(content) {
    this.modalRef = this._cfiscalService.open(content, { size: 'lg' })
  }

  onClickSearchById() {
   return this.cfiscalService.getCFiscal2(this.id).subscribe((data) => {
      var result;
      result = data;
      this.IssuesList = [];
      this.IssuesList.push(result);
   })
}

onClickSearchByCude() {
  this.cfiscalService.getCFiscal()
  .subscribe( resp => this.cfiscales = resp );
  }

    

}
