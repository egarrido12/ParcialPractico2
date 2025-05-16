import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;

  totalEpisodios: number = 0;
  ratingPromedio: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calcularEstadisticas();
  }

  calcularEstadisticas(): void {
    const episodios = this.animeDetail?.episodios;

    if (episodios && episodios.length > 0) {
      this.totalEpisodios = episodios.length;

      const sumaRatings = episodios.reduce((acc: any, episodio: { rating: any; }) => acc + episodio.rating, 0);
      this.ratingPromedio = +(sumaRatings / this.totalEpisodios).toFixed(2);
    } else {
      this.totalEpisodios = 0;
      this.ratingPromedio = 0;
    }
  }
  
}

