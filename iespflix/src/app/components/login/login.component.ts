import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';
import { CadastrarService } from 'src/app/service/cadastrar.service';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
                        private router: Router,
                        private cadastrarService: CadastrarService) { }

  tokenFromUI!: string;
  encrypted: any = "";

  form = new FormGroup({
    usuario: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required),
  }); 

  ngOnInit(): void {
  }

  async submeter() {
     if (this.form.invalid){
      return;
     }
     let usuario = this.form.get('usuario')?.value;
     let senha = this.form.get('senha')?.value;
     let login = {
        user: usuario,
        password: senha,
     }
     const result = await this.cadastrarService.login(login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['inicio']);
    } catch (error: Error) {
      console.error(error);
    
  }

  encryptUsingAES256(senha: any): string {
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(senha.senha), environment._key, {
        keySize: 16,
        iv: environment._iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return this.encrypted = encrypted.toString();
  }

 
 
}
