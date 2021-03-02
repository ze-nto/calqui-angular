import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiluicaoComponent } from 'src/app/components/diluicao/diluicao.component';
import { MeioCulturaComponent } from 'src/app/components/meio-cultura/meio-cultura.component';
import { MolaridadeComponent } from 'src/app/components/molaridade/molaridade.component';
import { PorcentagemComponent } from 'src/app/components/porcentagem/porcentagem.component';
import { TitulacaoComponent } from 'src/app/components/titulacao/titulacao.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  {
    path: 'diluicao',
    component: DiluicaoComponent
  },
  {
    path: 'porcentagem',
    component: PorcentagemComponent
  },
  {
    path: 'molaridade',
    component: MolaridadeComponent
  },
  {
    path: 'titulacao',
    component: TitulacaoComponent
  },
  {
    path: 'cultura',
    component: MeioCulturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
