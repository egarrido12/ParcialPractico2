import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<Anime[]>(this.apiUrl);
  }

  getAnime(id: string): Observable<Anime> {
  return this.http.get<Anime[]>(this.apiUrl).pipe(
    map((animes: Anime[]) => {
      // Convertimos el ID recibido a número (si aplica)
      const animeEncontrado = animes.find(anime => anime.id === Number(id));

      if (animeEncontrado) {
        return animeEncontrado;
      }
        throw new Error(`Anime con ID ${id} no encontrado`);
      })
    );
  }

}
