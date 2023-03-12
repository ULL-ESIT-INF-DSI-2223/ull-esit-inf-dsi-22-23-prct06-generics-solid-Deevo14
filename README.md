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

Para este ejercicio he modificado algunos ficheros del ejercicio anterior y agregado nuevos:

- Clase Song:

```
export class Song {
  private _name: string;
  private _duration: number;
  private _genres: string[];
  private _single: boolean;
  private _plays: number;
  private _version?: string;

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

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(duration: number) {
    this._duration = duration;
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(genres: string[]) {
    this._genres = genres;
  }

  get single(): boolean {
    return this._single;
  }

  set single(single: boolean) {
    this._single = single;
  }

  get plays(): number {
    return this._plays;
  }

  set plays(plays: number) {
    this._plays = plays;
  }

  get version(): string | undefined {
    return this._version;
  }

  set version(version: string | undefined) {
    this._version = version;
  }
}
```
A esta clase le hemos añadido el atributo *version* como opcional, para saber la version que tiene. Si solo tiene una 
version sera *undefined*.

- Clase Album:

```
export class Album {
  private _name: string;
  private _year: number;
  private _songs: Song[];

  constructor(name: string, year: number, songs: Song[]) {
    this._name = name;
    this._year = year;
    this._songs = songs;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get year(): number {
    return this._year;
  }

  set year(year: number) {
    this._year = year;
  }

  get songs(): Song[] {
    return this._songs;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }
}

export class AlbumCollection {
  private _albums: Album[];

  constructor(albums: Album[]) {
    this._albums = albums;
  }

  get albums(): Album[] {
    return this._albums;
  }

  set albums(albums: Album[]) {
    this._albums = albums;
  }
}
```

En album hemos añadido otra clase para crear colecciones de albumnes, con su getter y setter para un array de albumnes.

- Clase Single:
```
import { Song } from "./song";

export class Single{
    private _name: string;
    private _year: number;
    private _song: Song[];

    constructor(name: string, year: number, song: Song[]){
        this._name = name;
        this._year = year;
        this._song = song;
    }

    get name(): string{
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

    get year(): number{
        return this._year;
    }

    set year(year: number){
        this._year = year;
    }

    get song(): Song[]{
        return this._song;
    }

    set song(song: Song[]){
        this._song = song;
    }
}

export class SingleCollection{
    private _singles: Single[];

    constructor(singles: Single[]){
        this._singles = singles;
    }

    get singles(): Single[]{
        return this._singles;
    }

    set singles(singles: Single[]){
        this._singles = singles;
    }
}
```
Mismo funcionamiento que la clase Album, pero este la usamos para almacenar un single con sus posibles versiones.
Tenemos una clase para cada Single y otra para colleciones de Singles.

- Clase generica Discography:

```
export class Discography<T extends SingleCollection | AlbumCollection> {
    private _items: T[];

    constructor(items: T[]) {
        this._items = items;
    }

    get items(): T[] {
        return this._items;
    }

    set items(items: T[]) {
        this._items = items;
    }
}
```
Para la discografia del artista, hemos creado una clase generica Discography, donde tenemos como tipo de dato una
collecion de singles o de albumnes. Tenemos su constructos y su getter y setter.

- Clase Artist:

```
export class Artist<T extends SingleCollection | AlbumCollection> {
    private _name: string;
    private _monthlyListeners: number;
    private _discography: Discography<T>;

    constructor(name: string, monthlyListeners: number, discography: Discography<T>) {
        this._name = name;
        this._monthlyListeners = monthlyListeners;
        this._discography = discography;
    }   

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get monthlyListeners(): number {
        return this._monthlyListeners;
    }

    set monthlyListeners(monthlyListeners: number) {
        this._monthlyListeners = monthlyListeners;
    }

    get discography(): Discography<T> {
        return this._discography;
    }

    set discography(discography: Discography<T>) {
        this._discography = discography;
    }
}
```

A la clase Artist le he hecho varios cambios. La he convertido en generica para poder pasarle el tipo de dato que va 
a contener la discografia del artista. Depues solo he cambiado el atributo, constructor y metodo de discografia para ajustarlo
a la clase generica nueva.

- Clase MusicLibrary:
```
export class MusicLibrary {
    private _artists: Artist<SingleCollection | AlbumCollection>[];

    constructor(artistas: Artist<SingleCollection | AlbumCollection>[]) {
        this._artists = artistas;
    }

    get artistas(): Artist<SingleCollection | AlbumCollection>[] {
        return this._artists;
    }

    set artistas(artistas: Artist<SingleCollection | AlbumCollection>[]) {
        this._artists = artistas;
    }
}
```

A esta clase me faltaron por modificar todos los metodos del anterior ejercicio para ajustarlos a las nuevas clases genericas,
pero no me ha dado tiempo.

### Ejercicio Modificacion Clase

Para el ejercicio de clase hemos creado:

- Interfaz generica Collectable:

```
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T;
  removeItem(index: number): T;
  getNumberOfItems(): number;
}
```
Hemos definido todos los metodos que vamos a necesitar.


- Printable:
```
export interface Printable<T> {
  print(): void;
}
```
Interfaz que usaremos solo para el metodo de imprimir.


- Printable Collection:
```
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {

  constructor(private items: T[]) {}

  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  removeItem(index: number): T {
    const aux: T[] = this.items.splice(index, 1);
    return aux[0];
  }

  getNumberOfItems(): number {
    return this.items.length;
  }
  
  abstract print(): void;
}
```

Esta clase abstracta implementa las interfaces Collectable y Printable. Tenedremos un array de items
para guardar los elementos, y ademos implementamos todos los metodos menos el de imprimir, que sera
especifico para cada tipo de dato.

- NumericPrintableCollection:
```
export class NumericPrintableCollection extends PrintableCollection<number> {
    constructor(private numbers: number[]) {
      super(numbers);
    }
    
    print(): void {
      const out = this.numbers.join(", ");
      console.log(out);
    }
  }
```
Esta subclase sera para implementar de manera concreta el metodo print. Ademas, heredara el 
resto de metodos de la clase padre.

- StringPrintableCollection:
```
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(private strings: string[]) {
    super(strings);
  }

  print(): void {
    const out = this.strings.join(", ");
    console.log(out);
  }
}
```
Al igual que la otra subclase, implementaremos el metodo print y tenedremos el resto de metodos heredados.

## Conlcusiones

Esta práctica me ha resultado más complicada que las anteriores, principalmente por el tema de saber elegir correctamente la 
estructura de clases e interfaces. Por ejemplo, se que el ejercicio 3 no esta correctamente estructurado, pero no se me ocurrio
otra forma de hacerlo. Pero por el contrario, el ejercicio de clase me resulto muy fácil ya que era mucho mas guiado el enunciado.
En cuanto a compresión de la teoría de interfaces y clases genéricas y principios SOLID creo que lo entiendo todo bien, pero los problemas
son cuando tengo que decidir yo la estructura de cada ejercicio, que no se cual es la más correcta.