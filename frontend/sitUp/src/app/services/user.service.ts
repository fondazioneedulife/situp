import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private localStorageKey = 'is_authenticated';

  constructor(private http: HttpClient, private router: Router) { }

  private navigateTo(route: string): void {
    timer(1000).subscribe(() => this.router.navigate([route])).unsubscribe();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.localStorageKey) === 'true';
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.navigateTo('/accedi');
  }


}
