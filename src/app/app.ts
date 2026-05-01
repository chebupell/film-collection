import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header'
import { Breadcrumbs } from './components/breadcrumbs/breadcrumbs';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Breadcrumbs, Footer, RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
