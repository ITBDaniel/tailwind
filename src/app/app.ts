import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ContenidoPrincipal } from './contenido-principal/contenido-principal';

@Component({
  imports: [RouterOutlet, Header, ContenidoPrincipal],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TailwindProject');
}
