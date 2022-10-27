/* Descrizione:
Partendo dal markup della versione svolta in js plain (vedi allegato), rifare lo slider ma questa volta usando Vue.
Bonus:
al click su una thumb, visualizzare in grande l'immagine corrispondente
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe :occhiolino:
se a schermo appare qualcosa di strano, tipo {{message}} verificate di aver collegato la CDN */

const { createApp } = Vue

createApp({
    data() {
        return {
            visibleImg: 0,
            games: {
                image: [
                    './assets/img/01 Spiderman - Miles Morales.webp',
                    './assets/img/02 Ratchet & Clank - Rift Apart.webp',
                    './assets/img/03 Fortnite.webp',
                    './assets/img/04 Stray.webp',
                    './assets/img/05 Avengers.webp'
                ],
                title: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers"
                ],
                description: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'

                ]
            }
        }
    },
    methods: {

    }
}).mount("#app")


// class="${i === visibleImg ? 'visible' : ''}"












































/* console.log(slidesList);

// seleziono dove mettere le immagini
const slidesElement = document.querySelector(".carousel");

// getto la base per il mio counter e per poi passare alle imagini successive con ++ 
   //(inoltre se vado a cambiare "= 0" in "= X" posso far partire le slide da un img diversa)
let visibleImg = 0;

for (let i = 0; i < slidesList.length; i++) {
    const slideListObjects = slidesList[i];
    //console.log(slideListObjects);
    //console.log(slideListObjects.image);
    const slidesHtml = `<h4 class="${i === visibleImg ? 'visible' : ''}">${slideListObjects.title}</h4><p class="${i === visibleImg ? 'visible' : ''}">${slideListObjects.text}</p><img class="${i === visibleImg ? 'visible' : ''}" src="./assets/${slideListObjects.image}" alt="">`
    slidesElement.insertAdjacentHTML("beforeend", slidesHtml)
    //console.log(slidesHtml);
}

// creo due variabile che selezionino i pulsanti per farli poi funzionare
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// adesso voglio cambiare immagine con il click di next:
// vado a selezionare tutte le immagini con una var allImg
// creo una variabile (currentSlide) per poter selezionare l'img visibile al momento
// (dato che visibleImg ha valore zero pescherà la prima immagine)
// poi gli tolgo la classe visible con classlist.remove facendola sparire
// devo far andare avanti il counter di visibleImg con ++
// (var visibleImg creata prima del ciclo for e che di fatto "tiene il conto" per noi)
// inserito if, leggi sotto perché etcc..
// dopo if creo una var nextImg per l'img a seguire
// assegno alla img a seguire la classe visible per farla apparire 
function nextFunction() {
    const allImg = document.querySelectorAll('.carousel > img');
    const allTitle = document.querySelectorAll('.carousel > h4');
    const allParagraph = document.querySelectorAll('.carousel > p');
    //console.log("all img", allImg);
    const currentSlideImage = allImg[visibleImg];
    const currentSlideTitle = allTitle[visibleImg];
    const currentSlideParagraph = allParagraph[visibleImg];
    //console.log(currentSlideImage);
    currentSlideImage.classList.remove("visible");
    currentSlideTitle.classList.remove("visible");
    currentSlideParagraph.classList.remove("visible");
    visibleImg++;
    if (visibleImg === slidesList.length) {
        visibleImg = 0;
    }
    const nextImg = allImg[visibleImg];
    const nextTitle = allTitle[visibleImg];
    const nextParagraph = allParagraph[visibleImg];
    //console.log(nextImg);
    nextImg.classList.add("visible")
    nextTitle.classList.add("visible")
    nextParagraph.classList.add("visible")
}

// ora ricopio da sopra ma con -- per fare il previous img
function prevFunction() {
    const allImg = document.querySelectorAll('.carousel > img');
    const allTitle = document.querySelectorAll('.carousel > h4');
    const allParagraph = document.querySelectorAll('.carousel > p');
    const currentSlide = allImg[visibleImg];
    const currentSlideTitle = allTitle[visibleImg];
    const currentSlideParagraph = allParagraph[visibleImg];
    //console.log(currentSlide);
    currentSlide.classList.remove("visible");
    currentSlideTitle.classList.remove("visible");
    currentSlideParagraph.classList.remove("visible");
    visibleImg--;
    if (visibleImg === -1) {
        visibleImg = 4;
    }
    const prevImg = allImg[visibleImg];
    const prevTitle = allTitle[visibleImg];
    const prevParagraph = allParagraph[visibleImg];
    //console.log(prevImg);
    prevImg.classList.add("visible")
    prevTitle.classList.add("visible")
    prevParagraph.classList.add("visible")
}


 */