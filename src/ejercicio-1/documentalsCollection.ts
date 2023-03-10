import { BasicStreamableCollection } from "./basicStreamableCollection";
/**
 * Interfaz Documental
 */
interface Documental {
  title: string;
  year: number;
  genre: string;
  duration: number;
}
/**
 * Subclase DocumentalsCollection que extiende de BasicStreamableCollection
 */
export class DocumentalsCollection extends BasicStreamableCollection<Documental> {
  /**
   * Constructor de la clase DocumentalsCollection
   * @param doc Array de documentales
   */
  constructor(doc: Documental[]) {
    super(doc);
  }
  /**
   * Metodo que devuelve un array de documentales que contienen el título indicado
   * @param name Título del documental
   * @returns Array de documentales
   */
  searchTitle(name: string): Documental[] {
    return this.items.filter((doc) => doc.title.includes(name));
  }
  /**
   * Metodo que devuelve un array de documentales que se estrenaron en el año indicado
   * @param year Año del documental
   * @returns Array de documentales
   */
  searchYear(year: number): Documental[] {
    return this.items.filter((doc) => doc.year === year);
  }
  /**
   * Metodo que devuelve un array de documentales que son del género indicado
   * @param genre Género del documental
   * @returns Array de documentales
   */
  searchGenre(genre: string): Documental[] {
    return this.items.filter((doc) => doc.genre.includes(genre));
  }
  /**
   * Metodo que devuelve un array de documentales que tienen la duración indicada
   * @param duration Duración del documental
   * @returns Array de documentales
   */
  searchDuration(duration: number): Documental[] {
    return this.items.filter((doc) => doc.duration === duration);
  }
}
