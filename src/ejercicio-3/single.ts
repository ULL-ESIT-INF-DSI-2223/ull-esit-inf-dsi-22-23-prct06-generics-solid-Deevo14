import { Song } from "./song";

/**
 * Clase para crear singles
 */
export class Single{
    private _name: string;
    private _year: number;
    private _song: Song[];
    /**
     * Constructor de la clase Single
     * @param name Nombre del single
     * @param year Año de publicación del single
     * @param song Cancion o canciones versionadas del single
     */
    constructor(name: string, year: number, song: Song[]){
        this._name = name;
        this._year = year;
        this._song = song;
    }
    /**
     * Getter name
     * @return retorna el nombre del single
     */
    get name(): string{
        return this._name;
    }

    /**
     * Setter name
     * @param name Nombre del single
     */
    set name(name: string){
        this._name = name;
    }

    /**
     * Getter year
     * @return retorna el año de publicación del single
     */
    get year(): number{
        return this._year;
    }

    /**
     * Setter year
     * @param year Año de publicación del single
     */
    set year(year: number){
        this._year = year;
    }
    /**
     * Getter song
     * @return retorna la canción o canciones versionadas del single
     */
    get song(): Song[]{
        return this._song;
    }
    /**
     * Setter song
     * @param song Canción o canciones versionadas del single
     */
    set song(song: Song[]){
        this._song = song;
    }
}

/**
 * Clase para crear colecciones de singles
 */
export class SingleCollection{
    private _singles: Single[];
    /**
     * Constructor de la clase SingleCollection
     * @param singles Array de singles
     */
    constructor(singles: Single[]){
        this._singles = singles;
    }
    /**
     * Getter singles
     * @return retorna los singles
     */
    get singles(): Single[]{
        return this._singles;
    }
    /**
     * Setter singles
     * @param singles Singles
     */
    set singles(singles: Single[]){
        this._singles = singles;
    }
}