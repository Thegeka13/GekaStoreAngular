import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IProducto } from '../../interfaces/Producto';
import { FormsModule } from '@angular/forms';

interface Equipo {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  query: string = '';
  equipoSeleccionado: number | null = null;

  equipos: Equipo[] = [
    { id: 1, nombre: 'Red Bull Racing' },
    { id: 2, nombre: 'BWT Alpine' },
    { id: 3, nombre: 'Visa Cash App Racing Bulls' }
  ];

  @Output() resultadosEncontrados = new EventEmitter<IProducto[]>();

  constructor(private http: HttpClient) {}

  buscar() {
    const trimmedQuery = this.query.trim();
    let url = '';

    if (trimmedQuery && this.equipoSeleccionado != null) {
      // Buscar por query y equipo
      url = `https://localhost:7286/api/productos/buscar?query=${encodeURIComponent(trimmedQuery)}&equipo=${this.equipoSeleccionado}`;
    } else if (trimmedQuery) {
      // Buscar solo por query
      url = `https://localhost:7286/api/productos/buscar?query=${encodeURIComponent(trimmedQuery)}`;
    } else if (this.equipoSeleccionado != null) {
      // Buscar solo por equipo
      url = `https://localhost:7286/api/productos/equipo/${this.equipoSeleccionado}`;
    } else {
      // Sin filtros
      url = `https://localhost:7286/api/productos`;
    }

    this.http.get<IProducto[]>(url).subscribe({
      next: (data) => this.resultadosEncontrados.emit(data),
      error: (err) => console.error('Error al buscar productos:', err)
    });
  }
}
