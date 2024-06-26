//document.getElementById('titolo').innerText = 'Hello WOrld';//
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principaly datatype sono:
- Dato stringa: indica un carattere, ad esempio: const testo='Ciao a tutti', scritto con le doppie virgolette o con gli apici( ' ' )

- Dato numerico: indica il numero specifico intero o e se decimale si esprime sempre con il punto(10.33) esempio: const numero=123456.12 

- dato booleano: il quale verifica se una condizione è vera o è falsa, esempio: const veroOFalso= true /false 
 
-dato nullo: variabile senza un valore

dato indefinito: variabile senza un valore, che si aquisirà in seguito.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let myName='Pietro'; 
 console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12
let num2 = 20
let sum2 = num1 + num2;
console.log(sum2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


myName = 'Romano';
console.log(myName);

// const -//
const myConst = 'Pietro';
console.log(myConst); 
// myConst = 'romano';// scritto cosi genera un errore e non va avanti


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 let num3 = 4;
 let sottrazione = x - num3;
 console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';

const verify = name1 !== name2 ? 'name 1 è diverso da name 2' : 'name1 è identico a name2';
console.log(verify);

/*let areEqualLowercase = name1.toLowerCase() === name2.toLowerCase();
console.log(areEqualLowercase);*/ // cercato su google//

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

const verify2 = name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
console.log(verify2);