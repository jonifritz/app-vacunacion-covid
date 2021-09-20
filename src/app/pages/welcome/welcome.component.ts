import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isLoading = false;
  isCollapsed = false;
  currentUser;
  actualUser = JSON.parse(localStorage.getItem('user'));
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    console.log(this.currentUser);
  }

  onLogout() {
    this.isLoading = true;
    this.authService.logout();
  }
}
