import { BasicStreamableCollection } from "./basicStreamableCollection";

/**
 * Interfaz Serie
 */
interface Serie {
  title: string;
  year: number;
  episodes: number;
  genre: string;
}

/**
 * Subclase SeriesCollection que extiende de BasicStreamableCollection
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  /**
   * Constructor de la clase SeriesCollection
   * @param series Array de series
   */
  constructor(series: Serie[]) {
    super(series);
  }

  /**
   * Metodo que devuelve un array de series que contienen el título indicado
   * @param name Título de la serie
   * @returns Array de series
   */
  searchTitle(name: string): Serie[] {
    return this.items.filter((series) => series.title.includes(name));
  }

  /**
   * Metodo que devuelve un array de series que se estrenaron en el año indicado
   * @param year Año de la serie
   * @returns Array de series
   */
  searchYear(year: number): Serie[] {
    return this.items.filter((series) => series.year === year);
  }

  /**
   *  Metodo que devuelve un array de series que son del género indicado
   * @param genre Género de la serie
   * @returns
   */
  searchGenre(genre: string): Serie[] {
    return this.items.filter((series) => series.genre.includes(genre));
  }
  /**
   *  Metodo que devuelve un array de series que tienen el número de episodios indicado
   * @param episodes Número de episodios de la serie
   * @returns Array de series
   */
  searchEpisodes(episodes: number): Serie[] {
    return this.items.filter((series) => series.episodes === episodes);
  }
}
