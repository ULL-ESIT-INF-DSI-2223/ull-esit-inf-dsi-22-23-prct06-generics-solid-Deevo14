import { BasicStreamableCollection } from "./basicStreamableCollection";
/**
 * Interfaz Movie
 */
interface Movie {
  title: string;
  year: number;
  director: string;
  genre: string;
}

/**
 * Subclase MoviesCollection que extiende de BasicStreamableCollection
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
  /**
   * Constructor de la clase MoviesCollection
   * @param mov Array de películas
   */
  constructor(mov: Movie[]) {
    super(mov);
  }
  /**
   * Metodo que devuelve un array de películas que contienen el título indicado
   * @param name Título de la película
   * @returns Array de películas
   */
  searchTitle(name: string): Movie[] {
    return this.items.filter((movie) => movie.title.includes(name));
  }
  /**
   * Metodo que devuelve un array de películas que se estrenaron en el año indicado
   * @param year Año de la película
   * @returns Array de películas
   */
  searchYear(year: number): Movie[] {
    return this.items.filter((movie) => movie.year === year);
  }
  /**
   * Metodo que devuelve un array de películas que son del género indicado
   * @param genre Género de la película
   * @returns Array de películas
   */
  searchGenre(genre: string): Movie[] {
    return this.items.filter((movie) => movie.genre.includes(genre));
  }
  /**
   * Metodo que devuelve un array de películas que son dirigidas por el director indicado
   * @param director Director de la película
   * @returns Array de películas
   */
  searchDirector(director: string): Movie[] {
    return this.items.filter((movie) => movie.director.includes(director));
  }
}
