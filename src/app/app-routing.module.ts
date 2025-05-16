import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/animes', pathMatch: 'full' }, 
  { path: 'animes', component: AnimeListComponent }, 
  { path: 'animes/:id', component: AnimeDetailComponent }, 
  { path: '**', redirectTo: '/animes' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }