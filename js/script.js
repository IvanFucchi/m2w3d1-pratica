/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(number1, number2 ) {
    if (number1 === number2) {
        return (number1 + number2) * 3;
    } else {
        return number1 + number2
    }
}

const num1 = 10;
const num2 = 10;

console.log(crazySum (num1, num2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta (!! solamente !!) un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(integer) {

    //console.log( "integer: ", integer)

    //console.log( "il risultato di bitwise : " , integer | 0)

    //if ((integer | 0) === integer) 
    {
        return (integer >= 20 && integer <= 100)|| integer === 400;
    }
    //return "la variabile integer non è un numero intero"
}

console.log(boundary(400));


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(strng) {
    return strng.split('').reverse().join('');
}

console.log(reverseString('Ingirumimusnocteetconsumimurigni'));   

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    const array =  string.split(' ').map((item) => {
       return  item.charAt(0).toUpperCase() + item.slice(1);
    } )
    return array.join(",")
}

console.log(upperFirst("domani piove"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {

    const result = []
    for(let i = 0; i < n; i++) {
        const randomNumber = Math.random() *  10
        result.push(parseInt(randomNumber))
    }

    return result
}

console.log(giveMeRandom(5))



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return l1 * l2
}

console.log(area (4, 4))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(number) {

    const nineteen = 19
    const result = Math.abs(number - nineteen)

    if (result > nineteen) {
        return result * 3;
    }

}

console.log(crazyDiff(101))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(stringa) {
    const addedword = "code"
    
    if (stringa === "code") {
        return addedword
    }
    return (addedword + stringa)
}

console.log(codify("code"))



/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(integer) {
    if (integer % 3 === 0 || integer % 7 === 0) {
        return true
    }
    return false
}

console.log(check3and7(33))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {

    return str.slice(1, -1);
}

console.log(cutString("farfalla"))
