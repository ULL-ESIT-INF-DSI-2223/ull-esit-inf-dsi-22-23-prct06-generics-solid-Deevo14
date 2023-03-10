# Practica 6

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-Deevo14/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-Deevo14?branch=main)

## Índice

  1. Tareas Previas
  2. Ejercicios
  3. Conclusiones
  

## 1. Tareas Previas

  1. Aceptar la asignación de GitHub Classroom asociada a esta práctica
  2. Utilizar las herramientas Instanbul y Coveralls.
  3. Para cualquier tipo de incidencia, solo comunicarse a través de los issues de GitHub


## 2. Ejercicios

### Ejercicio 1 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

 - Streamable:

 ```
 export interface Streamable<T> {
  searchYear(year: number): T[];
  searchTitle(title: string): T[];
  searchGenre(genre: string): T[];
}
```

Interfaz generica Streamble, donde tenemos métodos de busqueda comunes a las series, peliculas y documentales.

- BasicStreambleCollection:

```
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    protected _items: T[];

    constructor(items: T[]) {
        this._items = items;
    }

    get items(): T[] {
        return this._items;
    }

    set items(items: T[]) {
        this._items = items;
    }

    abstract searchTitle(name: string): T[];

    abstract searchYear(year: number): T[];

    abstract searchGenre(genre: string): T[];
}
```

Definimos una clase abstracta llamada BasicStreamableCollection que implementa la interfaz Streamable y
almacenaremos en ella un array de elementos.
Tenemos su getter y su setter y, ademas, los 3 metodos de la interfaz los definiremos como abstractos 
para implementarlos posteriormente en las subclases.

 - SeriesCollection:

 ```
 interface Serie {
  title: string;
  year: number;
  episodes: number;
  genre: string;
}

export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(series: Serie[]) {
    super(series);
  }

  searchTitle(name: string): Serie[] {
    return this.items.filter((series) => series.title.includes(name));
  }

  searchYear(year: number): Serie[] {
    return this.items.filter((series) => series.year === year);
  }

  searchGenre(genre: string): Serie[] {
    return this.items.filter((series) => series.genre.includes(genre));
  }

  searchEpisodes(episodes: number): Serie[] {
    return this.items.filter((series) => series.episodes === episodes);
  }
}
```

Definimos una subclase SeriesCollection que extiende de la clase abstracta BasicStreamableCollection e implementa la interfaz Serie
Al constructor le pasamos un array de Series, y se lo pasamos a la clase padre usando "super".
Despues, implementamos los 3 metodos de busqueda de la clase padre, mas uno mas especifico para las series, que es para buscar por episodios.

- MoviesCollection:

```
interface Movie {
  title: string;
  year: number;
  director: string;
  genre: string;
}

export class MoviesCollection extends BasicStreamableCollection<Movie> {
  constructor(mov: Movie[]) {
    super(mov);
  }

  searchTitle(name: string): Movie[] {
    return this.items.filter((movie) => movie.title.includes(name));
  }

  searchYear(year: number): Movie[] {
    return this.items.filter((movie) => movie.year === year);
  }

  searchGenre(genre: string): Movie[] {
    return this.items.filter((movie) => movie.genre.includes(genre));
  }

  searchDirector(director: string): Movie[] {
    return this.items.filter((movie) => movie.director.includes(director));
  }
}
```
Igual que el anterior, pero tenemos un metodo adicional que es buscar por director

- DocumentalsCollection:

```
interface Documental {
  title: string;
  year: number;
  genre: string;
  duration: number;
}

export class DocumentalsCollection extends BasicStreamableCollection<Documental> {
  constructor(doc: Documental[]) {
    super(doc);
  }

  searchTitle(name: string): Documental[] {
    return this.items.filter((doc) => doc.title.includes(name));
  }

  searchYear(year: number): Documental[] {
    return this.items.filter((doc) => doc.year === year);
  }

  searchGenre(genre: string): Documental[] {
    return this.items.filter((doc) => doc.genre.includes(genre));
  }

  searchDuration(duration: number): Documental[] {
    return this.items.filter((doc) => doc.duration === duration);
  }
}
```
Igual que los otros dos anteriores, pero con un metodo adicional a los genericos que es buscar por duración.

### Ejercicio 2 - Implementación de una lista y sus operaciones

Esta es la clase que he creado para este ejercicio:
```
export class List<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  get list(): T[] {
    return this.items;
  }

  set list(items: T[]) {
    this.items = items;
  }

  append(item: T): T[] {
    const newItems = [...this.items, item];
    return newItems;
  }

  concatenate(lists: List<T>[]): T[] {
    let newItems = [...this.items];
    for (let i = 0; i < lists.length; i++) {
      newItems = [...newItems, ...lists[i].items];
    }
    return newItems;
  }

  filter(predicate: (item: T) => boolean): T[] {
    let filteredItems: T[] = [];
    for (let i = 0; i < this.length(); i++) {
      if (predicate(this.items[i])) {
        filteredItems = [...filteredItems, this.items[i]];
      }
    }
    return filteredItems;
  }

  length(): number {
    let i = 0;
    while (this.items[i] !== undefined) {
      i++;
    }
    return i;
  }

  map(predicate: (item: T) => T): T[] {
    let mappedItems: T[] = [];
    for (let i = 0; i < this.length(); i++) {
      mappedItems = [...mappedItems, predicate(this.items[i])];
    }
    return mappedItems;
  }

  reduce(predicate: (acc: T, item: T) => T, initialValue: T): T {
    let reducedItem: T = initialValue;
    for (let i = 0; i < this.length(); i++) {
      reducedItem = predicate(reducedItem, this.items[i]);
    }
    return reducedItem;
  }

  reverse(): T[] {
    let reversedItems: T[] = [];
    for (let i = this.length() - 1; i >= 0; i--) {
      reversedItems = [...reversedItems, this.items[i]];
    }
    return reversedItems;
  }

  forEach(predicate: (item: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      predicate(this.items[i]);
    }
  }
}
```
Esta clase contiene:

- Un atributo privado items de tipo T[].
- El constructor de la clase recibe un array de elementos de tipo T y lo asigna al atributo items.
- El método get list devuelve el array de elementos.
- El método set list recibe un array de elementos de tipo T y lo asigna al atributo items.
- El método append recibe un elemento de tipo T y lo añade al final del array de elementos.
- El método concatenate recibe un array de listas de elementos de tipo T y lo concatena al final del array de elementos.
- El método filter recibe una función con el filtro para seleccionar los elementos y devuelve un array con los elementos filtrados.
- El método length devuelve la longitud del array de elementos.
- El metodo map al cual le pasamos una funcion y devuelve la lista despues de aplicarle a cada elemento la funcion.
- El método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función
- El método reverse devuelve el array de elementos invertido.
- El método forEach recibe una función que recibe un elemento de tipo T y no devuelve nada y realiza una acción sobre cada elemento del array.

### Ejercicio 3 - Ampliando la biblioteca musical