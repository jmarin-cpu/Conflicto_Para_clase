import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
