import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { AppService } from 'src/app/utils/services/app.service';
import { TokenStorageService } from '../../auth/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  public authority: string;

  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: FormGroup;

  constructor(//private appService: AppService, 
    private tokenStorage: TokenStorageService, 
    private token: TokenStorageService) {}

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }


    this.searchForm = new FormGroup({
      search: new FormControl(null)
    });
  }

  logout() {
    this.token.signOut();
    //window.location.reload();
    window.location.href=("/");
  }
}
