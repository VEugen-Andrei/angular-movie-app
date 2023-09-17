import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailsComponent } from './components/movie-details/movie-details.component';
import { TvsDetailsComponent } from './components/tvs-details/tvs-details.component';

const routes: Routes = [
{path: 'app-movies', component: MoviesComponent},
{path: 'app-tv-series', component: TvSeriesComponent},
{path: 'app-tvs-details', component: TvsDetailsComponent},
{path: 'movie-details/:id', component: DetailsComponent},
{path: 'tvs-details/:id', component: TvsDetailsComponent},
{path: '**', component: MoviesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
