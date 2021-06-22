import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from '../sevices/ofertas.Services';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {


  public oferta: any 
  constructor(private route:ActivatedRoute , private ofertasService:OfertasService) { }

  ngOnInit(): void {

    this.ofertasService.getOfertaId(this.route.snapshot.params['id'])
      .subscribe(
        response => console.log(this.oferta = response[0])
        
        )
   
  }

}
