import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  entreprise: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
export const JWT_Token = 'part-token';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'api/users'; // Replace with your actual API endpoint

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  login(loginForm: LoginForm) {
    return this.http
      .post<any>('api/users/login', {
        email: loginForm.email,
        password: loginForm.password,
      })
      .pipe(
        map((token) => {
          localStorage.setItem(JWT_Token, token.access_token);
        })
      );
  }

  logout(){
    localStorage.removeItem(JWT_Token);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_Token);
    if (token !== null) {
      return !this.jwtHelper.isTokenExpired(token);
    }

    // Handle the case where token is null (e.g., user is not authenticated)
    return false;
  }

  getUserId(): Observable<number | null> {
    return of(localStorage.getItem(JWT_Token)).pipe(
      switchMap((jwt: string | null) => {
        if (!jwt) {
          // Handle the case where JWT is not present
          return of(null);
        }

        return of(this.jwtHelper.decodeToken(jwt)).pipe(
          map((decodedToken: any) => decodedToken?.user?.id as number)
        );
      })
    );
  }
}
