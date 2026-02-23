const board = document.getElementById("game-board");

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
inicializujPlochu(celkovyPocet);
