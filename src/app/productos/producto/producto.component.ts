// src/app/productos/producto/producto.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProducto } from '../../interfaces/Producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto!: IProducto;
}
