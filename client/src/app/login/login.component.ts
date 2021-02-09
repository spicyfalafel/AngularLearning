import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  selector: 'app-login-component',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  public user: User;

  public invalid : boolean;
  public errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = new User();
  }

  validateLogin() {
    if (this.user.username && this.user.password) {
      this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is', result);
        // @ts-ignore
          this.router.navigate(['/home']);
      }, error => {
        console.log('error is', error);
        this.errorMessage = error.status
        this.invalid = true
      });
    } else {
      alert('enter username and password');
    }
  }
}
