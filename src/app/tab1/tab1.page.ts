import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  monto = 0;
  civa =0;
  cit=0;
  suma = 0;
  utilidad = 0;
  constructor() {}

  verificarSimilitud() {
    this.civa = this.monto * 0.13;
    this.cit = this.monto * 0.03;
    this.suma = this.cit + this.civa;
    this.utilidad = this.monto - this.suma;
  }
}
