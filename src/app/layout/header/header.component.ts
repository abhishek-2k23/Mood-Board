import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isDarkMode:boolean = false;
  faSun = faSun
  faMoon = faMoon
  
  ngOnInit(): void {
      this.isDarkMode = localStorage.getItem('theme') === 'dark';
      this.changeTheme();
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
}
