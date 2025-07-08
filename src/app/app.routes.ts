import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent}
];