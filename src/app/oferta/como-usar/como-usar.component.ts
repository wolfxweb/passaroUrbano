import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/sevices/ofertas.Services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar:any
  constructor(private ofertasService:OfertasService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
   // console.log('id', this.route.parent?.snapshot.params['id'])
    this.ofertasService.getOfertaComoUsarId(this.route.parent?.snapshot.params['id'])
    .subscribe(response => this.comoUsar = response)
  }

}
