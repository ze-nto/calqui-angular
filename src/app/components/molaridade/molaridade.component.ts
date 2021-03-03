import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-molaridade',
  templateUrl: './molaridade.component.html',
  styleUrls: ['./molaridade.component.scss']
})
export class MolaridadeComponent implements OnInit {
  
  volume: number;
  massaMolar: number;
  concentracao: number;
  resultado: number = 0.0;

  constructor() { }

  ngOnInit() {
  }

  calcularMolaridade(): void{
    if(this.concentracao){
      let resultado = this.volume * this.massaMolar * this.concentracao;
      this.resultado = Number(resultado.toFixed(2)); 
    } else{
      this.resultado = 0;
    }
  }

  limpar(): void{
    this.concentracao = 0;
    this.massaMolar = 0;
    this.volume = 0;
    this.resultado = 0;
  }

}
