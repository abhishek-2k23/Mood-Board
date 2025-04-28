import { Component } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router : Router, private userservice: UserService){}
  userName = ''
  // setUserName(event: Event){
  //   this.userName = (event.target as HTMLInputElement).value;
  // }
  login(){
    if(this.userName.trim() !== ''){
      this.userservice.loginUser(this.userName);
    }
  }
}
