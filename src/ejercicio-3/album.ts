import { Song } from "./song";

/**
 * Clase para crear álbumes
 * Los atributos de la clase son:
 * name: nombre del álbum
 * year: año de publicación del álbum
 * songs: canciones del álbum
 */
export class Album {
  private _name: string;
  private _year: number;
  private _songs: Song[];

  /**
   * Constructor de la clase Album
   * @param name nombre del álbum
   * @param year año de publicación del álbum
   * @param songs canciones del álbum
   */
  constructor(name: string, year: number, songs: Song[]) {
    this._name = name;
    this._year = year;
    this._songs = songs;
  }

  /**
   * Getter name
   * @return retorna el nombre del álbum
   */
  get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param name nombre del álbum
   */
  set name(name: string) {
    this._name = name;
  }

  /**
   * Getter year
   * @return retorna el año de publicación del álbum
   */
  get year(): number {
    return this._year;
  }

  /**
   * Setter year
   * @param year año de publicación del álbum
   */
  set year(year: number) {
    this._year = year;
  }

  /**
   * Getter songs
   * @return retorna las canciones del álbum
   */
  get songs(): Song[] {
    return this._songs;
  }
  /**
   * Setter songs
   * @param songs canciones del álbum
   */
  set songs(songs: Song[]) {
    this._songs = songs;
  }
}

/**
 * Clase para crear colecciones de álbumes
 */
export class AlbumCollection {
  private _albums: Album[];
  /**
   * Constructor de la clase AlbumCollection
   * @param albums Array de álbumes
   */
  constructor(albums: Album[]) {
    this._albums = albums;
  }

  /**
   * Metodo que devuelve el array de álbumes
   * @returns Array de álbumes
   */
  get albums(): Album[] {
    return this._albums;
  }

  /**
   * Metodo setter de albums
   * @param albums Array de álbumes
   */
  set albums(albums: Album[]) {
    this._albums = albums;
  }
}
