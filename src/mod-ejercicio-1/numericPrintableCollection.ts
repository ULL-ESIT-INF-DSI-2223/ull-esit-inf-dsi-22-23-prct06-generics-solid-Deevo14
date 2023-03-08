import { PrintableCollection } from "./printableCollection";

/**
 * Subclase de la clase PrintableCollection para coleccion de elementos numericos
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
    /**
     * Constructor de la clase
     * @param numbers Le pasamos una colecccion de numeros
     */
    constructor(private numbers: number[]) {
      super(numbers);
    }
    
    /**
     * Metodo para imprimir la coleccion separada por comas
     */
    print(): void {
      const out = this.numbers.join(", ");
      console.log(out);
    }
  }