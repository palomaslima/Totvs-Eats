import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { SobreComponent } from './sobre/sobre.component';
import { RestauranteCardComponent } from './restaurante-card/restaurante-card.component';
import { RestaurantesService } from './restaurantes.service';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantesComponent,
    SobreComponent,
    RestauranteCardComponent,
    DetalhesRestauranteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
