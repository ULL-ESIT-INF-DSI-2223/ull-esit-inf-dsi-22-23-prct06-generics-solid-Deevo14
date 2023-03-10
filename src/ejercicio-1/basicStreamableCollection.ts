import { Streamable } from "./streamable";
/**
 * Clase abstracta BasicStreamableCollection que implementa la interfaz Streamable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected _items: T[];
  /**
   * Constructor de la clase BasicStreamableCollection
   * @param items Array de elementos de tipo T
   */
  constructor(items: T[]) {
    this._items = items;
  }
  /**
   * Getter de items
   * @returns Array de elementos de tipo T
   * @param items Array de elementos de tipo T
   */
  get items(): T[] {
    return this._items;
  }
  /**
   * Setter de items
   * @param items Array de elementos de tipo T
   */
  set items(items: T[]) {
    this._items = items;
  }
  /**
   * Metodo Abstracto que devuelve un array de películas que contienen el título indicado
   * @param name Título de la película
   * @returns Array de elementos de tipo T
   */
  abstract searchTitle(name: string): T[];
  /**
   * Metodo Abstracto que devuelve un array de películas que se estrenaron en el año indicado
   * @param year Año de la película
   * @returns Array de elementos de tipo T
   */
  abstract searchYear(year: number): T[];
  /**
   * Metodo Abstracto que devuelve un array de películas que son del género indicado
   * @param genre Género de la película
   * @returns Array de elementos de tipo T
   */
  abstract searchGenre(genre: string): T[];
}
