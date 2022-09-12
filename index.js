const codigoMorse = {
   "A": ".-",
   "B": "-...",
   "C": "-.-.",
   "D": "-..",
   "E": ".",
   "F": "..-.",
   "G": "--.",
   "H": "....",
   "I": "..",
   "J": ".---",
   "K": "-.-",
   "L": ".-..",
   "M": "--",
   "N": "-.",
   "O": "---",
   "P": ".--.",
   "Q": "--.-",
   "R": ".-.",
   "S": "...",
   "T": "-",
   "U": "..-",
   "W": ".--",
   "X": "-..-",
   "Y": "-.--",
   "Z": "--.."
}
const convertir_a_morse = (str) => {
   return str.toUpperCase().split("").map(el => {
      return codigoMorse[el] ? codigoMorse[el] : el;
   }).join("");
};
console.log(convertir_a_morse('hola'));
console.log(convertir_a_morse('usuario'));