import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

   constructor(private http:HttpClient) { }

   public getRestaurantes(){
     return this.http.get('http://localhost:3000/restaurants')
     .pipe(
      map( (dados) => {
          return dados;
      })
     );
   }

   public getDetalhes(idRestaurante){
    return this.http.get('http://localhost:3000/restaurants/' + idRestaurante)
    
  }
}
