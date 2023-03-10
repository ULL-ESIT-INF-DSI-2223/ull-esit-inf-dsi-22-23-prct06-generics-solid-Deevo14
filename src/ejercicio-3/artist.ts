import { AlbumCollection } from "./album";
import { Discography } from "./discography";
import { SingleCollection } from "./single";


/**
 * Clase que representa un artista
 * Los atributos de la clase son:
 * name: nombre del artista
 * monthlyListeners: número de oyentes mensuales del artista
 * discography: discografía del artista
 */
export class Artist<T extends SingleCollection | AlbumCollection> {
  private _name: string;
  private _monthlyListeners: number;
  private _discography: Discography<T>;

  /**
   * Constructor de la clase Artist
   * @param name nombre del artista
   * @param monthlyListeners número de oyentes mensuales del artista
   * @param discography discografía del artista
   */
  constructor(name: string, monthlyListeners: number, discography: Discography<T>) {
    this._name = name;
    this._monthlyListeners = monthlyListeners;
    this._discography = discography;
  }

  /**
   * Getter name
   * @return retorna el nombre del artista
   */
  get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param name nombre del artista
   */
  set name(name: string) {
    this._name = name;
  }

  /**
   * Getter monthlyListeners
   * @return retorna el número de oyentes mensuales del artista
   */
  get monthlyListeners(): number {
    return this._monthlyListeners;
  }

  /**
   * Setter monthlyListeners
   * @param monthlyListeners número de oyentes mensuales del artista
   */
  set monthlyListeners(monthlyListeners: number) {
    this._monthlyListeners = monthlyListeners;
  }

  /**
   * Getter discography
   * @return retorna la discografía del artista
   */
  get discography(): Discography<T> {
    return this._discography;
  }

  /**
   * Setter discography
   * @param discography discografía del artista
   */
  set discography(discography: Discography<T>) {
    this._discography = discography;
  }
}
