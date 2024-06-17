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
- Dato stringa: indica un carattere, ad esempio: const testo='Ciao a tutti'

- Dato numerico: indica il numero specifico e se decimale si esprime sempre con il punto(10.33) esempio: const numero=123456.12 

- dato booleano: il quale verifica se una condizione è vera o è falsa, esempio: const veroOFalso= true /false 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*string myName='Pietro'; 
 console.log('Pietro');*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let numero1 = 12
let numero2 = 20
let numero += numero */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x=12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* let myName='Pietro';
myName= 'Romano';

const myName= 'pietro';
myName = 'romano';
console.log (myName);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let x=12;
let numero3=4;

 x -= numero3; 
 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* let name1 = 'john';
let name2 = 'John';

const verify= name1 !== name2;
console.log(verify);

let areEqualLowercase = name1.toLowerCase() === name2.toLowerCase();
console.log(areEqualLowercase);*/