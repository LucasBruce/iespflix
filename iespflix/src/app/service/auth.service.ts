import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(usuario: string, senha: string) {
    return this.apiService.login(usuario, senha).pipe(
      tap((response: any) => {
        console.log(response.token);
      })
    );

  }
}
