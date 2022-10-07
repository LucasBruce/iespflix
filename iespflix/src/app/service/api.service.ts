import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpValue: HttpClient) { 
    this.http = httpValue;
  }
  private http: HttpClient;

  login(usuario: string, senha: string) {
     return this.http.post('login', { usuario, senha });
    }
}
