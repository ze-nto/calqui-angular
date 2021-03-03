import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentagem',
  templateUrl: './porcentagem.component.html',
  styleUrls: ['./porcentagem.component.scss']
})
export class PorcentagemComponent implements OnInit {
  concentracao: number;
  volume: number;
  resultado: number = 0.00;


  constructor() { }

  ngOnInit() {
  }

  calcularPorcentagem(): void {
    if(this.concentracao){
      let resultado = (this.concentracao * this.volume) / 100
      this.resultado = Number(resultado.toFixed(2));
    }else{
      this.resultado = 0;
    }
  }

  limpar(): void {
    this.concentracao = 0;
    this.volume = 0;
    this.resultado = 0;
  }

}
