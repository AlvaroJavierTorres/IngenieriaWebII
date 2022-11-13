import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numero1:any;
  numero2:any;

  constructor() {}

  areaTriangulo=()=>{
    let base = this.numero1
    let altura = this.numero2
    base = parseFloat(base);
    altura = parseFloat(altura);

    let area = ((base)*(altura)/2);
    document.getElementById("respuesta").innerHTML = `El area del Triangulo equlatero es: ${area}`

  }

}
