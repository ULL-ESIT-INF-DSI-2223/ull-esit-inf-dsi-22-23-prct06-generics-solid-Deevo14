import { Collectable } from "./collectable";
import { Printable } from "./printable";

/**
 * Clase abstracta generica donde vamos a implementar las interfaces
 * Collectable y Printable
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  /**
   * Constructor de la clase
   * @param items El paramtetro a pasar será un array de elementos
   */
  constructor(private items: T[]) {}

  /**
   * Metodo para añadir un elemento a la coleccion
   * @param newItem Elemento a añadir
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Metodo para que nos retorne un elemento de la coleccion
   * @param index le pasamos el indice como parametro
   * @returns nos retorna el elemento
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Metodo para borrar un elemento
   * @param index le pasamos el indice como parametro
   * @returns nos retorna el elemento eliminado
   */
  removeItem(index: number): T {
    const aux: T[] = this.items.splice(index, 1);
    return aux[0];
  }

  /**
   * Metodo para saber cuantos elementos tiene la coleccion
   * @returns nos retorna ek numero de elementos
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
  
  /**
   * Metodo abstracto para imprimir la coleccion
   */
  abstract print(): void;
}