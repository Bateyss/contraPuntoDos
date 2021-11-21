import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','./../../assets/fonts/fontsadded.css']
})
export class InicioComponent implements OnInit {

  public contactoForm: FormGroup;
  private links = ['Inicio', 'Multimedia', 'Branding', 'Diseño Web', 'Contacto'];

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private animateScrollService: NgAnimateScrollService
  ) {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required],Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      telefono: ['', [Validators.required,Validators.pattern('^[0-9+-]')]],
      pais: ['', [Validators.required,Validators.minLength(4)]],
      mensaje: ['', [Validators.required,Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    const tag2 = document.createElement('script');
    tag2.append('AOS.init();')
    document.body.appendChild(tag2);
  }

  guardarMensaje() {
    if (this.contactoForm.valid) {
      this.openSnackBar('Mensaje enviado','ok');
    }else{
      this.openSnackBar('Debe ingresar todos los datos necesarios','ok');
    }
  }

  drouter(link: string) {
    switch (link) {
      case 'm': this._router.navigate(['/multimedia']); break;
      case 'b': this._router.navigate(['/branding']); break;
      case 'd': this._router.navigate(['/webdesing']); break;
    }
  }

 contactoF(control:string) { return this.contactoForm.get(control); }

  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('inicioBottom', duration)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
} 
