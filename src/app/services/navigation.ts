import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  filmTitle = signal<string | null>(null);

  setFilmTitle(title: string | null) {
    this.filmTitle.set(title);
  }
}
