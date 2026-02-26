

const celkovyPocet = 64

function inicializujPlochu(celkovyPocet) {
    for (let i = 0; i < celkovyPocet; i++) {
        
        // A. Vytvoření nového divu v paměti
        const policko = document.createElement("div");
        
        // B. Přiřazení třídy pro CSS stylování
        
        if (Math.floor(i / 8) % 2 === 0) {
            // Pro sudé řádky začínáme s bílou
            if (i % 2 === 0) {
                policko.className = "cell_white";
            } else {
                policko.className = "cell_black";
            }
        } else {
            // Pro liché řádky začínáme s černou
            if (i % 2 === 0) {
                policko.className = "cell_black";
            } else {
                policko.className = "cell_white";
            }
        }

        if (i===0) {
            policko.textContent = "X";
        }
        if (i===1) {
            policko.textContent = "O";
        }
        // C. Vložení hotového políčka do kontejneru na stránce
        board.appendChild(policko);
    }
}
// spustíme generování pro 16 políček (4x4)
//inicializujPlochu(celkovyPocet);
const board = document.getElementById("game-board");
const velikost = 10;

// 1. INICIALIZACE HRACÍ PAMĚTI (je to model rozmístění hracích kamenů, který je na začátku prázdný)
let pametHry = [];
for (let r = 0; r < velikost; r++) {
  pametHry[r] = [];                     // založíme řádek
  for (let s = 0; s < velikost; s++) {
    pametHry[r][s] = "";                // každé políčko v řádku nastavíme na prázdný řetězec (prázdný prvek = není v něm hrací kámen)
  }
}

// GLOBÁLNÍ PROMĚNNÁ, která určuje, jaký hráč je na tahu
let aktualniHrac = "X";        // první na tahu je hráč s hracím kamenem X
document.getElementById("status").textContent = "Na tahu je hráč " + aktualniHrac;
/**
* VYKRESLENÍ HRACÍ PLOCHY
*/
for (let r = 0; r < velikost; r++) {
  for (let s = 0; s < velikost; s++) {
 
    // 1. VYTVOŘENÍ HTML prvku políčka
    const policko = document.createElement("div");
 
    // 2. VZHLED PRVKU - nastavení jeho stylu
    policko.className = "cell";
 
     // 3. FUNKCE PRVKU - přidání událostní funkce, která zajistí, že při kliknutí na něj bude vykreslen hrací kámen, a že se to poznamená do hrací paměti
    //                   Hrací kámen ale zapíšeme jen tehdy, pokud je v paměti na daných souřadnicích volno
    policko.onclick = function() {
      if (pametHry[r][s] === "") {
        // zápis do hrací paměti
        pametHry[r][s] = aktualniHrac;
        // vykreslení do políčka
        policko.textContent = aktualniHrac;
        // přepnutí výhybky na dalšího hráče (pokud je aktuální X, bude při příštím kliknutí O, a naopak)
        if (aktualniHrac === "X") {
            aktualniHrac = "O";
            policko.style.color = "lightblue";
            document.getElementById("status").textContent = "Na tahu je hráč " + aktualniHrac;
            document.getElementById("status").style.color = "lightblue";
        } else {
            aktualniHrac = "X";
            policko.style.color = "red";
            document.getElementById("status").textContent = "Na tahu je hráč " + aktualniHrac;
            document.getElementById("status").style.color = "red";
        }
      }
    };

    board.appendChild(policko);
  }
}
