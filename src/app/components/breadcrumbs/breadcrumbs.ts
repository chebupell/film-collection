import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavigationService } from '../../services/navigation';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink, CommonModule],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
   public router = inject(Router);
   public navService = inject(NavigationService);

  isPage(path: string): boolean {
    return this.router.url === path;
  }
}
