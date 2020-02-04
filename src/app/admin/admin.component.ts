import { Component, OnInit } from '@angular/core';
//import { UserService } from '../services/user.service';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

import { CreditoFiscalService } from '../services/credito-fiscal.service';
import { CFiscalModel } from '../models/cfiscal.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  //errorMessage: string;

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  cfiscales: CFiscalModel[] = [];

 

  constructor(//private userService: UserService,
    private authService: AuthService,
    private cfiscalService: CreditoFiscalService
    ) { }

  ngOnInit() {
  
    this.cfiscalService.getCFiscal()
      .subscribe( resp => this.cfiscales = resp );


    /*this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );*/
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
 
}
