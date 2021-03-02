import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PorcentagemComponent } from './components/porcentagem/porcentagem.component';
import { MolaridadeComponent } from './components/molaridade/molaridade.component';
import { TitulacaoComponent } from './components/titulacao/titulacao.component';
import { MeioCulturaComponent } from './components/meio-cultura/meio-cultura.component';
import { DiluicaoComponent } from './components/diluicao/diluicao.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorcentagemComponent,
    MolaridadeComponent,
    TitulacaoComponent,
    MeioCulturaComponent,
    DiluicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
