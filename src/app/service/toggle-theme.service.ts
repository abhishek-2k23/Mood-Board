import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {
  isDarkMode:boolean = false;
  constructor() { }
  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    if(this.isDarkMode){
      document.body.classList.add('dark-theme');
    }else{
      document.body.classList.remove('dark-theme');
    }
  }

}
