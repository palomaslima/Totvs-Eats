import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-restaurante-card',
  templateUrl: './restaurante-card.component.html',
  styleUrls: ['./restaurante-card.component.css']
})
export class RestauranteCardComponent implements OnInit {
  dadosRestaurantes;
  constructor(private restaurantes:RestaurantesService) { }

  ngOnInit() {
     this.getRestaurantes();
  }

    getRestaurantes(){
      this.restaurantes.getRestaurantes()
      .subscribe((dados) => {
        this.dadosRestaurantes = dados;
      });;
    }

}
