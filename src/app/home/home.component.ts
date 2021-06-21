import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../sevices/ofertas.Services';//inportação do serviço ofertas

import { Oferta } from '../model/oferta.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasService]// adicionado o serviço via provaider e declado o mesmo no construtor
})
export class HomeComponent implements OnInit {

  public produtos: Oferta[] =[]
  constructor( private ofertasService: OfertasService  ) { }

  ngOnInit(): void {
    this.produtos = this.ofertasService.getOfertas()// atribui as ofertas a uma variavel local para ser utilziado no template


    console.log(this.produtos[0].imagens[0].urlImg)
  }

}
