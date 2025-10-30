# Esercitazione 28/10/2025

## Consegna:

- Scrivi un programma che stampi i numeri da 1 a 100
- Per i multipli di 3 stampi “Fizz” al posto del numero
- Per i multipli di 5 stampi Buzz
- Per i numeri multipli sia di 3 che di 5 stampi FizzBuzz

**Svolgimento** (presenti tre versioni nel file js):
- __Prima versione:__ 
    - racchiude il funzionamento base che si vuole ottenere, senza tener conto del terzo messaggioe del fatto che debba essere senza spazi o a capo ( "FizzBuzz" );
- __Seconda versione:__
    - Versione ottimizzata di tre condizioni, sempre all'interno dell'iterazione che scorre i numeri da 1 a 100, annidate in cui:
        - 1° [ if ((i % 3) == 0 || (i % 5) == 0) ] controlla che almeno una delle due condizioni di divisibilità sia verificata e nel caso non lo sia si procede alla stampa del numero attuale. 
        Nel caso in cui questa, però risulti VERIFICATA si procede alla seconda condizione;
        - 2° [ if ((i % 3) == 0 && (i % 5) == 0) ]condizione per cui entrambe le divisibilità siano verificate, in quel caso si procede alla stampa di "FizzBuzz" altrimenti si passa, nel braccio FALSO con la terza condizione; 
        - 3° [ if ((i % 3) == 0 ] condizione a verificare una sola delle due condizioni di divisibilità (in questo caso quella del 3) e nel caso sia vera stamperemo il valore "Fizz" altrimenti il valore "Buzz".
-__Terza versione:__
    - Versione con utilizzo di concatenazione di stringhe:
        - creazione, <ins>fuori dall'iterazione</ins>, di una variabile di appoggio per il testo da stampare;
        - azzeramento della variabile d'appoggio [ testo = ""; ] in modo tale che a ogni iterazione non ci sia sovrapposizione di valori;
        - 1° [ if ((i % 3) != 0 && (i % 5) != 0) ] condizione in cui si verifica se entrambe le divisibilità non sono verificate: se non lo sono, condizione VERA, nella variabile d'appoggio viene salvato il valore della i, altrimenti si esce dalla condizione;
        - 2° [ if ((i % 3) == 0 ) ] si verifica se il numero attuale e divisibile per 3 e nel caso sia vero si procede al salvataggio del valore "Fizz" nella variabile d'appoggio, uscendo poi dall'if;
        - 3° [ if ((i % 5) == 0 ] si verifica se il numero attuale e divisibile per 5 e nel caso sia vero si procede alla concatenazione del valore "Buzz" nella variabile d'appoggio [ testo += "Buzz" ] procedendo poi all'uscita dall'if;
        - 4° al di fuori di tutte le condizioni si procede alla stampa del valore salvato nella variabile d'appoggio [ console.log( testo )]
