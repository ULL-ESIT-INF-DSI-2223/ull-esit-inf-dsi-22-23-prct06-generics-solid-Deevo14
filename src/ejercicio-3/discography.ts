import { SingleCollection } from "./single";
import { AlbumCollection } from "./album";

/**
 * Clase generica para crear colecciones de discos o singles
 */
export class Discography<T extends SingleCollection | AlbumCollection> {
    private _items: T[];

    /**
     * Constructor de la clase Discography
     * @param items Array de discos o singles
     */
    constructor(items: T[]) {
      this._items = items;
    }
    
    /**
     * Getter items
     * @return retorna los discos o singles
     */
    get items(): T[] {
      return this._items;
    }
    
    /**
     * Setter items
     * @param items discos o singles
     */
    set items(items: T[]) {
      this._items = items;
    }
  }