/* Descrizione:
Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue.
Bonus:
-al click su una thumb, visualizzare in grande l'immagine corrispondente
-applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
-quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe :occhiolino:
se a schermo appare qualcosa di strano, tipo {{message}} verificate di aver collegato la CDN */

const { createApp } = Vue

createApp({
    data() {
        return {
            visibleElement: 0,
            games: [
                {
                    title: 'Marvel\'s Spiderman Miles Morale',
                    image: './assets/img/01 Spiderman - Miles Morales.webp',
                    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    title: 'Ratchet & Clank: Rift Apart',
                    image: './assets/img/02 Ratchet & Clank - Rift Apart.webp',
                    description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    title: 'Fortnite',
                    image: './assets/img/03 Fortnite.webp',
                    description: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    title: 'Stray',
                    image: './assets/img/04 Stray.webp',
                    description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    title: "Marvel's Avengers",
                    image: './assets/img/05 Avengers.webp',
                    description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]

        }
    },
    methods: {
        nextFunction() {
            this.visibleElement++;
            if (this.visibleElement === this.games.length) {
                this.visibleElement = 0;
            }
        },
        prevFunction() {
            this.visibleElement--;
            if (this.visibleElement === -1) {
                this.visibleElement = 4;
            }
        },
        matchingImage(index) {
            //console.log("clicked");
            //console.log(index);
            this.visibleElement = index
        },
    }
}).mount("#app")