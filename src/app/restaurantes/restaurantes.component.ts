import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
 
})
export class RestaurantesComponent implements OnInit {

 
  public categoria:string ='restaurante'
  constructor() { }

  ngOnInit(): void {
  
    
  }

  
}
