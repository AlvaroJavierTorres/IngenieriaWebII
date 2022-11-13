import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {

  numero1:any;
  

  constructor() {}


conversion=()=>{

  this.numero1 = parseFloat(this.numero1);
  let num=this.numero1;
  let km = ((num)/1000);
  let hm = ((num)/100);
  let dm = ((num)/10);
  let cm = ((num)*100);
  let mm = ((num)*1000);
  document.getElementById("respuesta").innerHTML = `El valor en Kilometros es: ${km}km`
  document.getElementById("respuesta2").innerHTML = `El valor en Hectometro es: ${hm}hm`
  document.getElementById("respuesta3").innerHTML = `El valor en Decimetros es: ${dm}km`
  document.getElementById("respuesta4").innerHTML = `El valor en Centimetros es: ${cm}cm`
  document.getElementById("respuesta5").innerHTML = `El valor en Milimetros es: ${mm}mm`

}
}
