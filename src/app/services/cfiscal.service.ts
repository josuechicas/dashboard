import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CFiscal } from './cfiscal';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { CFiscalModel } from '../models/cfiscal.model';


@Injectable({
  providedIn: 'root'
})

export class CFiscalService {


  constructor(private http: HttpClient) { }

 
  getCFiscal() {
    //return this.http.get('/fesv/consultadte/0110-0000-0110-0000-0000-2020-2202-0100-0000-0011')
    return this.http.get('http://svfe-recepcion.centralus.azurecontainer.io:8080/fesv/consultadte/0110-0000-0110-0000-0000-2020-2202-0100-0000-0011')
       .pipe(
         map ( this.crearAreglo )
         //map ( this.crearAreglo2 )

       );
    
  }

  getCFiscal2(cude) {
    //return this.http.get('/fesv/consultadte/0110-0000-0110-0000-0000-2020-2202-0100-0000-0011')
    return this.http.get('http://svfe-recepcion.centralus.azurecontainer.io:8080/fesv/consultadte/' + cude)
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



}