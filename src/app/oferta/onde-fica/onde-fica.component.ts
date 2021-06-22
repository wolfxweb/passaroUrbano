import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/sevices/ofertas.Services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:any
  constructor(private route:ActivatedRoute,private ofertasService:OfertasService) { }

  ngOnInit(): void {
    console.log('id', this.route.parent?.snapshot.params['id'])
    this.ofertasService.getOfertaOndeFicaId(this.route.parent?.snapshot.params['id'])
    .subscribe(response => this.ondeFica = response)
  }

}
