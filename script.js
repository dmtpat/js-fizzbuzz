// Input
let testo = " ";

//Svolgimento

for (let i=1; i<= 100; i++) {
    
   /*
   //v1
   //versione iniziale in cui si verificano le condizioni ma i due valori vengono scritti in maniera separata
    if ((i % 3) == 0) {
        fTrue = true;
        console.log("Fizz");
    }
    else if ((i%5) == 0) {
        console.log("Buzz");
    }else{
        console.log(i);
    }
    */
   /*
    //v2
    if ((i % 3) == 0 || (i % 5) == 0) { //controllo se almeno una delle due condizioni è vera
        if ((i % 3) == 0 && (i % 5) == 0) { //controllo i casi in cui entrambe sono vere
            console.log("FizzBuzz");
        } else if ((i % 3) == 0) {// nel caso non sono entrambe vere controllo se la prima è vera
           console.log("Fizz"); 
        } else {
            console.log("Buzz");// nel caso sia falsa è automaticamente vera l'altra
        }
    } else {
        console.log(i);// caso in cui nessuna delle due condizioni si verifica
    }
    */
    //v3
    // opzione aggiuntiva con variabile messaggio che si compone e viene stampata alla fine
    testo = "";
    if ((i % 3) != 0 && (i % 5) != 0){ 
        testo = i;
        //console.log("non divisibile")
    } else {
        //testo = "";
    
    if ((i % 3) == 0) {
        
        testo = "Fizz";
    }
    if ((i % 5) == 0) {
        
        testo += "Buzz";
    } 
    }    
    
    
    console.log(testo);
    

}

//Output
