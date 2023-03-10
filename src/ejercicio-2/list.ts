/**
 * Clase List
 */
export class List<T> {
  private items: T[];
  /**
   * Constructor de la clase List
   * @param items Array de elementos
   */
  constructor(items: T[]) {
    this.items = items;
  }

  /**
   * Metodo que devuelve el array de elementos
   * @returns Array de elementos
   */
  get list(): T[] {
    return this.items;
  }

  /**
   * Metodo que modifica el array de elementos
   * @param items Array de elementos
   * @returns Array de elementos
   */
  set list(items: T[]) {
    this.items = items;
  }

  /**
   * Metodo que añade un elemento al array de elementos
   * @param item Elemento a añadir
   * @returns Array de elementos
   */
  append(item: T): T[] {
    const newItems = [...this.items, item];
    return newItems;
  }

  /**
   * Metodo que concatena varios arrays de elementos
   * @param lists Array de listas de elementos
   * @returns Array de elementos
   */
  concatenate(lists: List<T>[]): T[] {
    let newItems = [...this.items];
    for (let i = 0; i < lists.length; i++) {
      newItems = [...newItems, ...lists[i].items];
    }
    return newItems;
  }

  /**
   * Metodo que devuelve un array de elementos que cumplen la condición indicada
   * @param predicate Condición a cumplir
   * @returns Array de elementos
   */
  filter(predicate: (item: T) => boolean): T[] {
    let filteredItems: T[] = [];
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.items[i])) {
        filteredItems = [...filteredItems, this.items[i]];
      }
    }
    return filteredItems;
  }

  /**
   * Metodo que devuelve la longitud del array de elementos
   * @returns Longitud del array de elementos
   */
  length(): number {
    let i = 0;
    while (this.items[i] !== undefined) {
      i++;
    }
    return i;
  }

  /**
   * Metodo que devuelve un array de elementos que son el resultado de aplicar la función indicada a todos los elementos del array
   * @param predicate Condición a cumplir
   * @returns Array de elementos
   */
  map(predicate: (item: T) => T): T[] {
    let mappedItems: T[] = [];
    for (let i = 0; i < this.length(); i++) {
      mappedItems = [...mappedItems, predicate(this.items[i])];
    }
    return mappedItems;
  }
  /**
   * Metodo que devuelve un elemento que es el resultado de aplicar la función indicada a todos los elementos del array
   * @param predicate Condición a cumplir
   * @param initialValue Valor inicial
   * @returns Elemento
   */
  reduce(predicate: (acc: T, item: T) => T, initialValue: T): T {
    let reducedItem: T = initialValue;
    for (let i = 0; i < this.length(); i++) {
      reducedItem = predicate(reducedItem, this.items[i]);
    }
    return reducedItem;
  }

  /**
   * Metodo que devuelve el array de elementos invertido
   * @returns Array de elementos invertido
   */
  reverse(): T[] {
    let reversedItems: T[] = [];
    for (let i = this.length() - 1; i >= 0; i--) {
      reversedItems = [...reversedItems, this.items[i]];
    }
    return reversedItems;
  }

  /**
   * Metodo para realizar una acción sobre cada elemento del array
   * @param predicate Acción a realizar
   */
  forEach(predicate: (item: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      predicate(this.items[i]);
    }
  }
}