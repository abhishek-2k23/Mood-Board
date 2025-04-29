import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName = '';
  private isLoggedIn = false;

  //for real-time data change
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private router: Router) {
    this.userName = localStorage.getItem('userName') || '';
    this.isLoggedIn = this.userName !== null;
    this.userSubject.next(this.userName);
  }
  loginUser(userName: string){
    this.userName = userName;
    localStorage.setItem('userName', userName);
    this.router.navigate([''])
    this.userSubject.next(userName);
  }
  logoutUser(){
    localStorage.removeItem('userName');
    this.userName = '';
    this.isLoggedIn = false;
    this.userSubject.next(null);
    this.router.navigate(['/welcome-to-mood-board'])
  }
  getUserName(){
    return this.userName;
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }
}
