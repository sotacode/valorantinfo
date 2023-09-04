export function insertCharAtIndex(originalString: string, charToInsert: string, index: number): string {
    if (index < 0 || index > originalString.length) {
      // Si el índice está fuera de rango, no realizamos cambios
      return originalString;
    }
  
    const firstPart: string = originalString.slice(0, index); // Parte inicial de la cadena
    const secondPart: string = originalString.slice(index);    // Parte restante de la cadena
  
    const resultString: string = firstPart + charToInsert + secondPart; // Concatenar las partes
  
    return resultString;
  }