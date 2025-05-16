import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { AnimeDetailComponent } from "../anime-detail/anime-detail.component";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

    calcularRatingPromedioGlobal(): number {
    if (!this.animes || this.animes.length === 0) return 0;

    let totalRating = 0;
    let cantidad = 0;

    for (let anime of this.animes) {
      if (anime.ratingPromedio !== undefined) {
        totalRating += anime.ratingPromedio;
        cantidad++;
      }
    }

    return cantidad > 0 ? parseFloat((totalRating / cantidad).toFixed(2)) : 0;
  }
}
