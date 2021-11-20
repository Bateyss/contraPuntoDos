import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public contactoForm: FormGroup;
  private links = ['Inicio', 'Multimedia', 'Branding', 'Diseño Web', 'Contacto'];

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private animateScrollService: NgAnimateScrollService
  ) {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {

  }

  guardarMensaje() {

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
} 
