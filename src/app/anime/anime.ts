export interface Episodio {
  titulo: string;
  rating: number;
}



export class Anime {
  id: number;
  name: string;
  description: string;
  Rating: string;
  total_episodes: number;
  categorie: string;
  studio: string;
  img: string;
  episodios: Episodio[]
  ;


  constructor(
    id: number,
    name: string,
    description: string,
    Rating: string,
    total_episodes: number,
    categorie: string,
    studio: string,
    img: string,
    episodios: Episodio[],
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rating = Rating,
    this.total_episodes = total_episodes;
    this.categorie= categorie,
    this.studio= studio,
    this.img = img;
    this.episodios = episodios;
  }

    get totalEpisodios(): number {
    return this.episodios.length;
  }

  get ratingPromedio(): number {
    if (this.episodios.length === 0) return 0;
    const sumaRatings = this.episodios.reduce((acc, ep) => acc + ep.rating, 0);
    return parseFloat((sumaRatings / this.episodios.length).toFixed(2));
  }
}
 
