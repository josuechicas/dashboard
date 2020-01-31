
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';

import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { AppService } from '../utils/services/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  public loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

    onSubmit() {
      console.log(this.form);
  
      this.loginInfo = new AuthLoginInfo(
        this.form.username,
        this.form.password);
  
      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.reloadPage();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    reloadPage() {
      //window.location.reload();
      window.location.href=("inicio");
    }

    
    //this.renderer.addClass(document.body, 'login-page');
    //this.loginForm = new FormGroup({
      //email: new FormControl(null, Validators.required),
      //password: new FormControl(null, Validators.required)
    //});
  

  logIn() {
    /*if (this.loginForm.valid) {
      this.appService.login();
    } else {
      this.toastr.error('Hello world!', 'Toastr fun!');
    }*/
  }

  ngOnDestroy() {
    //this.renderer.removeClass(document.body, 'login-page');
  }
}
