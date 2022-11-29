import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { ReplaySubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.uid !== null;
  }
}
