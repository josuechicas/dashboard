import { Component, OnInit } from '@angular/core';
import { CFiscalService } from '../services/cfiscal.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CFiscalModel } from '../models/cfiscal.model';
//import { UserService } from '../services/user.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


//import 'jspdf-autotable';
//import { userOptions } from 'jspdf-autotable';

//import jsPDF from 'jspdf';
//import 'jspdf-autotable';

//interface jsPDFWithPlugin extends jsPDF {
  //autotable: (options: userOptions) => jsPDF;

//}

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {

  downloadPdf(){

    const doc=new jsPDF();
    doc.text('Comprobante Factura Electronica de Credito Fiscal DEMO',10,10,);

  doc.setFontSize(12);
  doc.text('Emisor.', 5, 30);
  doc.text('Nit: 0614-010180-134-5 ', 5, 35);
  doc.text('Nombre: MI EMPRESA S.A', 5, 40);
  //doc.text('Actividad Economica: COMERCIO', 5, 45);
  //doc.text('Nobre Comercial: MI EMPRESA', 5, 50);
  //doc.text('Tipo Establecimiento: MATRIZ', 5, 55);
  //doc.text('Nobre Establecimiento: CENTRAL', 5, 60);
  //doc.text('Departamento: SAN SALVADOR', 5, 65);
  //doc.text('Municipio: SAN SALVADOR', 5, 70);
  doc.text('Direccion: CALLE LA REFORMA #1030', 5, 45);


  doc.setFontSize(12);
  doc.text('Receptor.', 5, 55);
  doc.text('Nit: 0614-010190-134-3', 5, 60);
  doc.text('Nombre: DISTRIBUIDORA NACIONAL S.A.', 5, 65);
  //doc.text('Actividad Economica: COMERCIO', 100, 45);
  //doc.text('Nobre Comercial: DISTRIBUIDORA NACIONAL', 100, 50);
  //doc.text('Tipo Establecimiento: MATRIZ', 100, 55);
  //doc.text('Nobre Establecimiento: CENTRAL', 100, 60);
  //doc.text('Departamento: SAN SALVADOR', 100, 65);
  //doc.text('Municipio: SAN SALVADOR', 100, 70);
  doc.text('Direccion: COL. SAN BENITO BLVD. DEL HIPODROMO #1234', 5, 70);
  doc.text('Telefono: 2222-2222', 5, 75);
  doc.text('Correo: info@correo.com', 5, 80);


  doc.text('Datos Generales',5,90);
  doc.text('Version: 0',5,95);
  doc.text('TipoDTE000; 01',5,100);
  doc.text('Fecha Emision: 2020-02-02 04:30:10',5,105);
  doc.text('Cude: 0110-0000-0110-0000-0000-2020-2202-0100-0000-0011',5,110);

  
    var columns = ["Descripcion","Cantidad","Codigo","Uni/Med","Precio unitario","NoSujeta","Exenta","Afecta","VItem"];
    var data = [
    ["ESCOBAS 1 METRO", 20, "000000001", "UNIDAD", 5, 0, 0, 100, 5],
    ["TRAPIADOR 1 METRO", 20, "000000002", "UNIDAD", 5, 0, 0, 100, 5],
    ["", "", "", "", "", "", "", "VTotal", 10],
    ["", "", "", "", "", "", "", "VNoSujeta", 0],
    ["", "", "", "", "", "", "", "ventaExenta", 200],
    ["", "", "", "", "", "", "", "ventaAfecta", 0],
    ["", "", "", "", "", "", "", "ventaNeta", 200],
    ["", "", "", "", "", "", "", "iva", 26],
    ["", "", "", "", "", "", "", "subTotal", 226],
    ["", "", "", "", "", "", "", "totalPagar", 226] ];


    var logo = new Image();
logo.src = '../../../assets/img/qr.png';
doc.addImage(logo, 'JPEG', 150, 20,40,40);


doc.setFontSize(12);
doc.text('Mas Info.', 5, 230);
doc.text('NombreEntrega: JUAN PEREZ', 5, 235);
doc.text('NumeroEntrega: 00000000-1', 5, 240);
doc.text('NombreRecibe: ROSA RIVAZ', 5, 245);
doc.text('NumRecibe: 00000000-2', 5, 250);
doc.text('Observaciones:', 5, 255);

    
    
     
  

  
     
    doc.autoTable(columns,data,
      { startY: 120 }
    );


    doc.save('test.pdf');

  }

  
  
   

    //const doc = new jspdf('portrait','px','a4') as jsPDFWithPlugin;

    //doc.autotable({
     // head:[['Name','Email','Country']],
     // body:[
       // ['David','josue@hotmail.com','San Salvador'],
        //['David','josue@hotmail.com','San Salvador'],
        //['David','josue@hotmail.com','San Salvador']
       // ]
    //})
    //doc.save("table.pdf");

  //}
  

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
  