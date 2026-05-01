import { effect, Injectable, signal } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private storageKey = 'favorite_films';
  public favorites = signal<Film[]>(this.loadFavorites());

  constructor() {
    // Автоматически сохраняем в LocalStorage при каждом изменении сигнала
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favorites()));
    });
  }

  private loadFavorites(): Film[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  toggleFavorite(film: Film) {
    const current = this.favorites();
    const isFavorite = current.some(f => f.id === film.id);

    if (isFavorite) {
      this.favorites.set(current.filter(f => f.id !== film.id));
    } else {
      this.favorites.set([...current, film]);
    }
  }

  isFavorite(filmId: number): boolean {
    return this.favorites().some(f => f.id === filmId);
  }
}
