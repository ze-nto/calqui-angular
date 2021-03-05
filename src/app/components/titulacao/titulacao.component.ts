import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulacao',
  templateUrl: './titulacao.component.html',
  styleUrls: ['./titulacao.component.scss']
})
export class TitulacaoComponent implements OnInit {

  massaMolar: number;
  resultado: number = 0.00; 
  m1: number;
  m2: number;
  m3: number;
  v1: number;
  v2: number;
  v3: number;

  constructor() { }

  ngOnInit() {
  }

  calcularTitulacao(){
    if(this.massaMolar){
      let amostra1 = (this.m1 / this.massaMolar) / this.v1
      let amostra2 = (this.m2 / this.massaMolar) / this.v2
      let amostra3 = (this.m3 / this.massaMolar) / this.v3
      this.resultado = (amostra1 + amostra2 + amostra3) / 3
    } else{
      this.resultado = 0;
    }
  }

  limpar(){
    this.massaMolar = null;
    this.resultado = 0;
    this.m1 = null
    this.m2 = null
    this.m3 = null
    this.v1 = null
    this.v2 = null
    this.v3 = null
  }

}
