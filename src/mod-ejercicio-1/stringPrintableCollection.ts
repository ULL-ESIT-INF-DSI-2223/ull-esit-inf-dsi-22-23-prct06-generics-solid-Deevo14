import { PrintableCollection } from "./printableCollection";

/**
 * Subclase de la clase PrintableCollection para coleccion de elementos strings
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(private strings: string[]) {
    super(strings);
  }

  /**
     * Metodo para imprimir la coleccion separada por comas
  */
  print(): void {
    const out = this.strings.join(", ");
    console.log(out);
  }
}