import {Routes} from '@angular/router';
import {HomePage} from './home-page/home-page';
import {FilmPage} from './film-page/film-page';
export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'film-title/:id',
    component: FilmPage,
  },
  {
    path: '**',
    redirectTo: ''
  },
];
