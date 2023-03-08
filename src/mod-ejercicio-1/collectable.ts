/**
 * Interfaz generica que define diferentes metodos de una coleccion de elementos
 */
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}