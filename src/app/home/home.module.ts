import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';



@NgModule({
  declarations: [
    CarrouselComponent,
    InicioComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    CabeceraComponent
  ],
  exports: [
    CabeceraComponent,
    InicioComponent,
    FooterComponent,
    CarrouselComponent
  ],
})
export class HomeModule { }
