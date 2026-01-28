/* PROCEDIMENTO
1)Stampo a video la successione di operazioni "Inserire chilometri da percorrere ed età passeggero per calcolare il prezzo totale del viaggio"
2)Inizializzo la prima variabile con il prompt (Inserire chilometri da percorrere)
3)Inizializzo la seconda variabile con il prompt (Inserire l'età del passeggero)
4)Imposto un if-elseif-else e stampo a video il risultato
*/

console.log("Inserire chilometri da percorrere ed età passeggero per calcolare il prezzo totale del viaggio")
let chilometri = prompt ("Inserire chilometri da percorrere")
let età = prompt ("Inserire l'età del passeggero")
let prezzo

if (età < 18){
    prezzo = ((chilometri * 0.21)- (((chilometri * 0.21)*0.2)))
} else if(età > 65){
    prezzo = ((chilometri * 0.21)- (((chilometri * 0.21)*0.4)))
} else {
    prezzo = (chilometri * 0.21)
}

console.log("Il prezzo è " + prezzo.toFixed(2) + "€")