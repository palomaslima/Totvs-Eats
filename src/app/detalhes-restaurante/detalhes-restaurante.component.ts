import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestaurantesService } from '../restaurantes.service';

@Component({
  selector: 'app-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html',
  styleUrls: ['./detalhes-restaurante.component.css']
})
export class DetalhesRestauranteComponent implements OnInit {

  dadosRestaurantes;
  dadosDetalhes;
  constructor(private restaurantes: RestaurantesService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDetalhes();
  }

  getDetalhes(){
    let idRestaurante = this.route.snapshot.params['idRestaurante'];
    //this.dadosDetalhes = this.restaurantes.getDetalhes(idRestaurante);
      this.restaurantes.getDetalhes(idRestaurante)
      .subscribe((dados) => {
        this.dadosDetalhes = dados;
      });
  }

  



}
