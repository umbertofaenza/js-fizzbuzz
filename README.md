# JS FIZZBUZZ

## Traccia

Scrivi un programma che:

- Stampi in console i numeri da 1 a 100;
- Per i multipli di 3 stampi "Fizz" al posto del numero;
- Per i multipli di 5 stampi "Buzz" al posto del numero;
- Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel _BONUS 1_, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Svolgimento

- Apro un ciclo "for" con un contatore da 1 a 100.
- Stampo in console la variabile del contatore.
- **SE** il numero è multiplo di 3

  - stampo "Fizz" al posto del numero

  **ALTRIMENTI SE** il numero è multiplo di 5

  - stampo "Buzz" al posto del numero

    **ALTRIMENTI SE** il numero è sia multiplo di 3 che di 5

    - stampo "FizzBuzz" al posto del numero
