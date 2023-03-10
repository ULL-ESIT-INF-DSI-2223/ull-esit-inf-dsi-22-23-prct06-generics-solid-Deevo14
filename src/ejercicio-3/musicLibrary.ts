import { Artist } from "./artist";
import { SingleCollection } from "./single";
import { AlbumCollection } from "./album";
/**
 * Clase MusicLibrary
 * Los atributos de la clase son:
 * artists: artistas de la biblioteca
 */
export class MusicLibrary {
  private _artists: Artist<SingleCollection | AlbumCollection>[];

  /**
   * Constructor de la clase MusicLibrary
   * @param artists artistas de la biblioteca
   */
  constructor(artistas: Artist<SingleCollection | AlbumCollection>[]) {
    this._artists = artistas;
  }

  /**
   * Getter artists
   * @return retorna los artistas de la biblioteca
   */
  get artistas(): Artist<SingleCollection | AlbumCollection>[] {
    return this._artists;
  }

  /**
   * Setter artists
   * @param artists artistas de la biblioteca
   */
  set artistas(artistas: Artist<SingleCollection | AlbumCollection>[]) {
    this._artists = artistas;
  }
}

