import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnInit } from '@angular/core';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkMode:boolean = false;
  userName: string | null = null;
  faSun = faSun
  faMoon = faMoon
  
  //userService instance
  constructor(private userService : UserService){};

  //theme changes and userName subscription
  ngOnInit(): void {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.changeTheme();
      this.userService.user$.subscribe(userName => {
        this.userName = userName;
      })
  }

  
  //toggle theme function
  toggleTheme():void{
    this.isDarkMode = !this.isDarkMode;
    this.changeTheme();
    console.log(this.isDarkMode);
  }

  changeTheme():void{
    if(this.isDarkMode){
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }else{
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  //set the theme icon 
  themeIcon = this.isDarkMode ? faMoon : faSun;

  logout(){
    this.userService.logoutUser();
  }
}
