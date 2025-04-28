import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedin = localStorage.getItem('userName') !== null;
  console.log(isLoggedin);
  const router = inject(Router);

  if(!isLoggedin){
    router.navigate(['/welcome-to-mood-board'])
  }

  return isLoggedin;
};
