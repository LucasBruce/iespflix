import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  form = new FormGroup({
    usuario: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
  }); 

  ngOnInit(): void {
  }

  validarForm(): void {
     if (this.form.invalid){
      return;
     }

     this.authService.login(typeof(this.form.get('usuario')?.value) as string, typeof(this.form.get('senha')?.value) as string)
     .subscribe((response: any) => {
       console.log(response);
       this.router.navigate(['/inicio']);
     },
     (erro: Error) => {
      console.warn("descricao erro => ",erro.message);
     });
  }

  login(): void {
   
  }

 
 
}
