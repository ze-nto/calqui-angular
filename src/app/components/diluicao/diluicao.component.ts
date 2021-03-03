import { Component, OnInit } from '@angular/core';
import { Solucao } from 'src/app/models/solucao.model';


@Component({
  selector: 'app-diluicao',
  templateUrl: './diluicao.component.html',
  styleUrls: ['./diluicao.component.scss']
})

export class DiluicaoComponent implements OnInit {

  entrada: Solucao = {
    concentracao: null, 
    unidade: '',
    volume: null
  }

  saida: Solucao ={
    concentracao: null,
    unidade: '',
    volume: null
  }

  resultado: number = 0.00;

  constructor() { }

  ngOnInit() {
  }

  calcularDiluicao(): void{

    if(this.entrada.concentracao){
      let resultado = (this.saida.concentracao * this.saida.volume) / this.entrada.concentracao 
      this.resultado = Number(resultado.toFixed(2))
    } else{
      this.resultado = 0
    }
  }

  limpar(): void{
    this.entrada.concentracao = null
    this.entrada.volume = null
    this.saida.concentracao = null
    this.saida.volume = null
    this.resultado = 0

  }

}
