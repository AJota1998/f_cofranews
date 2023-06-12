import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-registro-colectivo',
  templateUrl: './registro-colectivo.component.html',
  styleUrls: ['./registro-colectivo.component.scss']
})
export class RegistroColectivoComponent implements OnInit {

  colectivo = {
    nombreColectivo: '',
    correo: '',
    contrasena: '',
    tipo: '',
    provincia: '',
    localidad: '',
    anoFundacion: '',
    descripcion: ''
  }

  alert: string = '';
  showMessage = false;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){}

  registroColectivo() {

    if(this.colectivo.nombreColectivo === "" || this.colectivo.correo === "" || this.colectivo.contrasena === "" ||
    this.colectivo.tipo === "" || this.colectivo.provincia === "" || this.colectivo.localidad === ""
    || this.colectivo.anoFundacion === "" || this.colectivo.descripcion === "") {
     this.alert = "Faltan campos por rellenar"
     this.showMessage = true;

     setTimeout(() => {
       this.showMessage = false;
     }, 1700);
    } else {
      this.authService.registroColectivo(this.colectivo)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('correo', res.correo);
          localStorage.setItem('id', res.id);
          this.router.navigate(['/inicio-colectivo']);
        },
        err => {
          console.log(err);
        }
      )
    }

   
  }
}
