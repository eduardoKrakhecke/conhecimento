import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "@app/services/login/login.service";
import { User } from "@app/models/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user ={} as User
  firstName = ''

constructor(
  private router: Router,
  private loginService: LoginService
) {
}
  logout(): void {
    this.loginService.logout()
    this.router.navigateByUrl('/user/login')
  }

  ngOnInit(): void {
    this.user  = JSON.parse(localStorage.getItem("user") || "")
    const userName = this.user.name.split(' ')
    this.firstName = userName[0]
  }

}
