import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../models/film.model';
import { FavoriteService } from '../services/favorite-service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{
  public favoriteService = inject(FavoriteService);
  private http = inject(HttpClient);

  films = signal<Film[]>([])
  filterText = signal('');
  filteredFilms = computed(() => {
    const text = this.filterText().toLowerCase();
    if (!text) return this.films();
    return this.films().filter(movie =>
      movie.title.toLowerCase().includes(text)
    );
  });

  ngOnInit(): void {
    this.http.get<Film[]>('assets/mock/films.json').subscribe(data => {
      this.films.set(data)
    })
  }

  updateFilter(text: string) {
    this.filterText.set(text);
  }
}
