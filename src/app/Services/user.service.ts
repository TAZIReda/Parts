import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt"; 

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
};
export const JWT_Token = 'part-token';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users'; // Replace with your actual API endpoint

  constructor(private http: HttpClient, private jwtHelper : JwtHelperService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('api/users', user);
  }

  login(loginForm: LoginForm){ 
    return this.http.post<any>('api/users/login', { email: loginForm.email, password:loginForm.password }).pipe(
      map((token)=>{
        localStorage.setItem(JWT_Token, token.access_token);
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT_Token);
    // console.log(token);
    // Check if token is not null before passing it to isTokenExpired
    if (token !== null) {
      console.log(this.jwtHelper.isTokenExpired(token))
      return !this.jwtHelper.isTokenExpired(token);
    }
  
    // Handle the case where token is null (e.g., user is not authenticated)
    return false;
  }
}
