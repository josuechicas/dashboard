import { Component, OnInit } from '@angular/core';
import { CFiscalService } from '../services/cfiscal.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CFiscalModel } from '../models/cfiscal.model';
//import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {

  modalRef = null;

  //IssuesList: any = [];
  public IssuesList: Array<any> = [];
  cfiscales: CFiscalModel[] = [];

  id = 0;
  cudeFe = "";

  board: string;
  errorMessage: string;

  constructor(
    public cfiscalService: CFiscalService,
    private _cfiscalService: NgbModal
    //private userService: UserService
    ) { }

  ngOnInit() {
    //this.userService.getPMBoard().subscribe(
      //data => {
        //this.board = data;
      //},
      //error => {
        //this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      //}
    //);
  }
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
  