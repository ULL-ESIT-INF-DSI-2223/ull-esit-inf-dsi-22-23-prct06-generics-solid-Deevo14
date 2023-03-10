/**
 * Clase para crear canciones
 * Los atributos de la clase son:
 * name: nombre de la canción
 * duration: número de segundos que dura la canción
 * genres: géneros de la canción
 * single: si es single o no
 * plays: número de veces que se ha reproducido la canción
 * version: versión de la canción
 */
export class Song {
  private _name: string;
  private _duration: number;
  private _genres: string[];
  private _single: boolean;
  private _plays: number;
  private _version?: string;

  /**
   * constructor de la clase Song
   * @param name nombre de la canción
   * @param duration número de segundos que dura la canción
   * @param genres géneros de la canción
   * @param single si es single o no
   * @param plays número de veces que se ha reproducido la canción
   * @param version parametro opcional: versión de la canción
   */
  constructor(
    name: string,
    duration: number,
    genres: string[],
    single: boolean,
    plays: number,
    version?: string
  ) {
    this._name = name;
    this._duration = duration;
    this._genres = genres;
    this._single = single;
    this._plays = plays;
    this._version = version;
  }

  /**
   * Getter name
   * @return retorna el nombre de la canción
   */
  get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param name nombre de la canción
   */
  set name(name: string) {
    this._name = name;
  }

  /**
   * Getter duration
   * @return retorna el número de segundos que dura la canción
   */
  get duration(): number {
    return this._duration;
  }

  /**
   * Setter duration
   * @param duration número de segundos que dura la canción
   */
  set duration(duration: number) {
    this._duration = duration;
  }

  /**
   * Getter genres
   * @return retorna los géneros de la canción
   */
  get genres(): string[] {
    return this._genres;
  }

  /**
   * Setter genres
   * @param genres géneros de la canción
   */
  set genres(genres: string[]) {
    this._genres = genres;
  }

  /**
   * Getter single
   * @return retorna si es single o no
   */
  get single(): boolean {
    return this._single;
  }

  /**
   * Setter single
   * @param single si es single o no
   */
  set single(single: boolean) {
    this._single = single;
  }

  /**
   * Getter plays
   * @return retorna el número de veces que se ha reproducido la canción
   */
  get plays(): number {
    return this._plays;
  }

  /**
   * Setter plays
   * @param plays número de veces que se ha reproducido la canción
   */
  set plays(plays: number) {
    this._plays = plays;
  }

  /**
   * Getter version
   * @return retorna la versión de la canción
   */
  get version(): string | undefined {
    return this._version;
  }

  /**
   * Setter version
   * @param version versión de la canción
   */
  set version(version: string | undefined) {
    this._version = version;
  }
}
