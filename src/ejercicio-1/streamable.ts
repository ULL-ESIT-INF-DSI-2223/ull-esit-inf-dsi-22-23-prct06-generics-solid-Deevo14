/**
 * Interfaz Streamable
 * @param T Tipo de dato que se va a almacenar en la lista
 * @param year Año de la película
 * @param title Título de la película
 * @param genre Género de la película
 * @param searchYear Método que devuelve un array de películas que se estrenaron en el año indicado
 * @param searchTitle Método que devuelve un array de películas que contienen el título indicado
 * @param searchGenre Método que devuelve un array de películas que contienen el género indicado
 */
export interface Streamable<T> {
  searchYear(year: number): T[];
  searchTitle(title: string): T[];
  searchGenre(genre: string): T[];
}
