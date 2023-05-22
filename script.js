let userScore = 0;
let pcScore = 0;
let userScore_span = document.getElementById("user-score");
let pcScore_span = document.getElementById("cp-score");
const kamen = document.getElementById("kamen");
const makaze = document.getElementById("makaze");
const papir = document.getElementById("papir");
const rezultat = document.getElementById("ispis-pobjede");
// funkcija koja nasumicno izabere broj izmedju 1-3 i vraca element niz na odgovarajucem indeksu
let pcIzbor = () => {
    const izbori = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return izbori[random];
}

// glavna game funkcija koja poredi vrijednosti PCIzbora i userInputa te odredjuje ko je pobijednik
let game = (userIput) => {
    const PCIzbor = pcIzbor();
    if (PCIzbor === userIput) {
        rezultat.innerHTML = "Tie";
    }
    else if (userIput === "Rock") {
        if (PCIzbor == 'Paper') {
            pcScore++;
            pcScore_span.innerHTML = pcScore;
            //rezultat.innerHTML = "You picked " + userIput + " and the PC picked " + PCIzbor + " ,PC won";
            rezultat.innerHTML =PCIzbor + " beats " + userIput + " ,PC won";
        }
        else {
            userScore++;
            userScore_span.innerHTML = userScore;
            rezultat.innerHTML =userIput + " beats " + PCIzbor + " ,You won";
        }
    }
    else if (userIput === "Scissors") {
        if (PCIzbor === "Rock") {
            pcScore++;
            pcScore_span.innerHTML = pcScore;
            rezultat.innerHTML =PCIzbor + " beats " + userIput + " ,PC won";
        }
        else {
            userScore++;
            userScore_span.innerHTML = userScore;
            rezultat.innerHTML =userIput + " beat " + PCIzbor + " ,You won";
        }
    }
    else if (userIput === "Paper") {
        if (PCIzbor === "Scissors") {
            pcScore++;
            pcScore_span.innerHTML = pcScore;
            rezultat.innerHTML =PCIzbor + " beat " + userIput + " ,PC won";
        }
        else {
            userScore++;
            userScore_span.innerHTML = userScore;
            rezultat.innerHTML =userIput + " beats " + PCIzbor + " ,You won";
        }
    }
}

let reset = () => {
    pcScore = 0;
    pcScore_span.innerHTML = pcScore;
    userScore = 0;
    userScore_span.innerHTML = userScore;
    rezultat.innerHTML = "Make your move to start the game";
}
