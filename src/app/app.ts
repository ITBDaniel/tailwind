import { QueEs } from './que-es/que-es';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ContenidoPrincipal } from './contenido-principal/contenido-principal';
import { Estadisticas } from './estadisticas/estadisticas';
import { PiePagina } from './pie-pagina/pie-pagina';

@Component({
  imports: [RouterOutlet, Header, ContenidoPrincipal, QueEs, Estadisticas, PiePagina],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TailwindProject');
}
