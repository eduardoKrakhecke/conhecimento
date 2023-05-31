import { Component } from '@angular/core';
import { LoginService } from "@app/services/login/login.service";
import { Router } from "@angular/router";
import { User } from "@app/models/user";
import {ToastService} from "@app/components/shared/toast/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {} as User;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.loginService.login(this.user).subscribe(
      () => {
        this.router.navigateByUrl('/home');
      },
      (error: any) => {
        if (error.status == 400 || error.status == 401) {
          this.toastService.showToast('usuário ou senha inválidos', 'error')
        } else {
          console.error(error);
        }
      }
    );
  }

}
