import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeModule } from "./home/home.module";
import { CabeceraComponent } from './home/cabecera/cabecera.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, HttpClientModule, FormsModule, FooterComponent],  // Importa el router
  templateUrl: './app.component.html',
})
export class AppComponent {}