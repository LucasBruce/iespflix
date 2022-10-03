import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formGroup!: FormGroup;
  erroNome!: boolean;
  hintNome!: string;
  erroEmail!: boolean;
  hintEmail!: string;
  erroDataNascimento!: boolean;
  hintDataNascimento!: string;
  erroSenha!: boolean;
  hintSenha!: string;
  erroSenhaConfirmar!: boolean;
  hintSenhaConfirmar!: string;
  erroNumeroCartao!: boolean;
  hintNumeroCartao!: string;
  erroValidadeCartao!: boolean;
  hintValidadeCartao!: string;
  erroCodigoCartao!: boolean;
  hintCodigoCartao!: string;
  erroTitularCartao!: boolean;
  hintTitularCartao!: string;
  erroCpfCnpj!: boolean;
  hintCpfCnpj!: string;

  validarSenha!: boolean;
  senha: any;
  senhaConfirmar: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      dataNascimento: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      senhaConfirmar: [null, [Validators.required]],
      numeroCartao: [null, [Validators.required]],
      validadeCartao: [null, [Validators.required]],
      codigoCartao: [null, [Validators.required]],
      titularCartao: [null, [Validators.required]],
      cpfCnpj: [null, [Validators.required]],
    });
  }

 confirmarSenha(): boolean{
  this.senha = this.formGroup.get('senha')?.value;
  this.senhaConfirmar = this.formGroup.get('senhaConfirmar')?.value;
  this.validarSenha = this.senha != this.senhaConfirmar;
  return this.validarSenha;
 }

 campoValida(): void {
  this.confirmarSenha();
    if(this.validarSenha){
      this.senhaConfirmar.ValidationErrors
    }

     if(this.formGroup.get('nome')?.errors != null){
      this.hintNome = "Nome Completo é obrigatório.";
     }
     if(this.formGroup.get('email')?.errors != null){
      this.hintEmail = "E-mail é obrigatório e precisa ser válido."
     }
     if(this.formGroup.get('dataNascimento')?.errors != null){
      this.hintDataNascimento = "Data de Nascimento é obrigatório.";
     }
     if(this.formGroup.get('senha')?.errors != null){
      this.hintSenha = "Senha é obrigatório.";
     }  
     if(this.formGroup.get('senhaConfirmar')?.errors != null){
      this.hintSenhaConfirmar = "Confirmar Senha é obrigatório.";
       
     }else if(this.validarSenha){
      this.hintSenhaConfirmar = "Senha incorreta.";
     
     }
     if(this.formGroup.get('numeroCartao')?.errors != null){
      this.hintNumeroCartao = "Número do Cartão é obrigatório.";
     }
     if(this.formGroup.get('validadeCartao')?.errors != null){
      this.hintValidadeCartao = "Validade do Cartão é obrigatório."
     }
     if(this.formGroup.get('codigoCartao')?.errors != null){
      this.hintCodigoCartao = " Código de Segurança é obrigatório.";
     }
     if(this.formGroup.get('titularCartao')?.errors != null){
      this.hintTitularCartao = "Nome do Titular do Cartão é obrigatório.";
     }
     if(this.formGroup.get('cpfCnpj')?.errors != null){
      this.hintCpfCnpj = "CPF/CNPJ é obrigatório."
      }  
    }

}


