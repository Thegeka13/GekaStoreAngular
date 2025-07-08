import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IProducto } from '../../interfaces/Producto';
import { ProductoComponent } from '../producto/producto.component';
import { ProductosModule } from "../productos.module";
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductoComponent, BuscadorComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: IProducto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.http.get<IProducto[]>('https://localhost:7286/api/productos').subscribe({
      next: data => this.productos = data,
      error: err => console.error('Error cargando productos', err)
    });
  }

  actualizarResultados(filtrados: IProducto[]): void {
    this.productos = filtrados;
  }
}

