import { Component, OnInit , Input} from '@angular/core';
import { Oferta } from 'src/app/model/oferta.model';
import { OfertasService } from 'src/app/sevices/ofertas.Services';

@Component({
  selector: 'app-lista-oferta',
  templateUrl: './lista-oferta.component.html',
  styleUrls: ['./lista-oferta.component.css'],
  providers: [OfertasService]
})
export class ListaOfertaComponent implements OnInit {

  @Input() public categoria:string =''
  public ofertas: Oferta[] = []
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    console.log(this.categoria)
    this.ofertasService.getOfertaPorCategoria(this.categoria)
    .subscribe(response => {
      this.ofertas = response
    // console.log('Lista oferta ->',this.ofertas)

    })
  }

}
