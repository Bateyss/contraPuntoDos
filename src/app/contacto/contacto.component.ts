import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { Utils } from '../utils';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css', './../../assets/fonts/fontsadded.css', './../inicio/inicio.component.css']
})
export class ContactoComponent implements OnInit {

  public fadeDuration:number = Utils.fadeInDuration;

  public contactoForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private animateScrollService: NgAnimateScrollService
  ) {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9+-]')]],
      pais: ['', [Validators.required, Validators.minLength(4)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    const tag2 = document.createElement('script');
    tag2.append('AOS.init();')
    document.body.appendChild(tag2);
  }

  guardarMensaje() {
    if (this.contactoForm.valid) {
      this.openSnackBar('Mensaje enviado', 'ok');
    } else {
      this.openSnackBar('Debe ingresar todos los datos necesarios', 'ok');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: Utils.snackBarDutarion,
    });
  }

  moveBotton(duration?: number) {
    this.animateScrollService.scrollToElement('contactoBottom', Utils.scrollerDuration)
  }

  contactoF(control: string) { return this.contactoForm.get(control); }
}
