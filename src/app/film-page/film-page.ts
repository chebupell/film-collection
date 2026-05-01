import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Film } from '../models/film.model';
import { NavigationService } from '../services/navigation';
import { FavoriteService } from '../services/favorite-service';
import { DurationPipe } from '../pipes/duration-pipe';

@Component({
  selector: 'app-film-page',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-page.html',
  styleUrl: './film-page.css',
})
export class FilmPage implements OnInit {
  public favoriteService = inject(FavoriteService);
  private navService = inject(NavigationService);
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  currentFilm = signal<Film | null>(null)
  favorite: any = true;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http.get<Film[]>('assets/mock/films.json').subscribe((allFilms) => {
        const foundFilm = allFilms.find(f => f.id === Number(id));

        if (foundFilm) {
          this.currentFilm.set(foundFilm);
          this.navService.setFilmTitle(foundFilm.title);
        }
      })
    }
  }

  changeFavorite() {
    this.favorite = !this.favorite
  }
}
