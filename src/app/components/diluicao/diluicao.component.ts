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

  constructor() { }

  ngOnInit() {
  }

  calcularDiluicao(): void{
    
  }

}
