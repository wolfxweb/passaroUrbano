import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../sevices/ofertas.Services';//inportação do serviço ofertas

import { Oferta } from '../model/oferta.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]// adicionado o serviço via provaider e declado o mesmo no construtor
})
export class HomeComponent implements OnInit {

  public produtos: Oferta[] = []
  public errors:string = ''
 
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // atribui as ofertas a uma variavel local para ser utilziado no template 
    this.ofertasService.getOferta()
      .subscribe(
        suce => this.produtos = suce
        
      )

  }

}
