import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CFiscalModel } from '../models/cfiscal.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CreditoFiscalService {
  constructor(protected http: HttpClient) { }

  getCFiscal() {
    //return this.http.get('/fesv/consultadte/0110-0000-0110-0000-0000-2020-2202-0100-0000-0011')
    return this.http.get('http://svfe-recepcion.centralus.azurecontainer.io:8080/fesv/consultadte/0110-0000-0110-0000-0000-2020-2202-0100-0000-0011')
       .pipe(
         map ( this.crearAreglo )
         //map ( this.crearAreglo2 )

       );
    
  }
  private crearAreglo( cfiscalObj: object ) {

    const cfiscales: CFiscalModel[] = [];
    console.log( cfiscalObj );

    Object.keys ( cfiscalObj ).forEach( key => {
      const cfiscal: CFiscalModel = cfiscalObj[key];
      cfiscal.id = key;

      cfiscales.push( cfiscal );

    } );
  return cfiscales;
  }

  /*private crearAreglo2( cfiscalObj: object ) {
    var result = Object.keys(cfiscalObj).map(function(e){
      Object.keys(cfiscalObj[e]).forEach(function(k){
         if(typeof cfiscalObj[e][k] == "object") {
          cfiscalObj[e][k] = Object.keys(cfiscalObj[e][k]).map(function(l){
             return cfiscalObj[e][k][l];
           });
         }
      });
      return cfiscalObj[e];
    });
    console.log(result);

  }*/



  

}