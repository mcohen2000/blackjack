let playerHand = [];
let playerMoney;
let playerBet;
const playerHandDisplay = document.querySelector('#playerHandDisplay');
const playerHandWrapper = document.querySelector("#playerHand-wrapper");
const playerMoneyDisplay = document.querySelector('#playerMoney');
const playerBalanceDisplay = document.querySelector('#playerBalanceDisplay');
const playerBetDisplay = document.querySelector('#playerBet');
const playerScoreDisplay = document.querySelector('#playerScore');
let dealerHand = [];
let dealerScore = 0;
const dealerHandWrapper = document.querySelector("#dealerHand-wrapper");
const dealerScoreDisplay = document.querySelector('#dealerScore');
let cardDeck = ['1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub', '1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub'];
let cardsRemaining = cardDeck.length;
const cardsRemainingDisplay = document.querySelector('#cardsRemaining');
cardsRemainingDisplay.innerText = `Cards left: ${cardsRemaining}`;
function drawCard() {
    let newCard = cardDeck.splice( Math.floor(Math.random()*cardDeck.length), 1 );
    const newCardDisplay = document.createElement("div");
    newCardDisplay.id = "card";

    
    const cardIcon = document.createElement("i");
    if (newCard[0].includes("heart")){
        newCardDisplay.style.color = 'red';
        cardIcon.className += "bi bi-suit-heart-fill";
    } else if (newCard[0].includes("spade")){
        newCardDisplay.style.color = 'black';
        cardIcon.className += "bi bi-suit-spade-fill";
    } else if (newCard[0].includes("diamond")){
        newCardDisplay.style.color = 'red';
        cardIcon.className += "bi bi-suit-diamond-fill";
    } else if (newCard[0].includes("club")){
        newCardDisplay.style.color = 'black';
        cardIcon.className += "bi bi-suit-club-fill";
    }

    const cardLeft = document.createElement("p");
    if (parseInt(newCard) == 1 || parseInt(newCard) == 11) {
        cardLeft.innerHTML = "A";
        cardLeft.innerHTML += cardIcon.outerHTML;
    } else if (newCard[0].includes("10K")){
        cardLeft.innerHTML = "K";
        cardLeft.innerHTML += cardIcon.outerHTML;
    } else if (newCard[0].includes("10Q")){
        cardLeft.innerHTML = "Q";
        cardLeft.innerHTML += cardIcon.outerHTML;
    } else if (newCard[0].includes("10J")){
        cardLeft.innerHTML = "J";
        cardLeft.innerHTML += cardIcon.outerHTML;
    } else{
        cardLeft.innerHTML = parseInt(newCard);
        cardLeft.innerHTML += cardIcon.outerHTML;
    }
    cardLeft.classList.toggle("left");

    const cardRight = document.createElement("p");
    if (parseInt(newCard) == 1 || parseInt(newCard) == 11) {
        cardRight.innerHTML += cardIcon.outerHTML;
        cardRight.innerHTML += "A";
    } else if (newCard[0].includes("10K")){
        cardRight.innerHTML += cardIcon.outerHTML;
        cardRight.innerHTML += "K";
    } else if (newCard[0].includes("10Q")){
        cardRight.innerHTML += cardIcon.outerHTML;
        cardRight.innerHTML += "Q";
    } else if (newCard[0].includes("10J")){
        cardRight.innerHTML += cardIcon.outerHTML;
        cardRight.innerHTML += "J";
    } else{
        cardRight.innerHTML += cardIcon.outerHTML;
        cardRight.innerHTML += parseInt(newCard);
    }
    cardRight.classList.toggle("right");


    playerHand.push(newCard);
    cardsRemaining -= 1;
    cardsRemainingDisplay.innerText = `Cards left: ${cardsRemaining}`;
    newCardDisplay.append(cardLeft);
    newCardDisplay.append(cardRight);
    playerHandWrapper.append(newCardDisplay);
} 
function dealerDrawCard() {
    if (dealerScore<17) {
        let newCard = cardDeck.splice( Math.floor(Math.random()*cardDeck.length), 1 );

        const newCardDisplay = document.createElement("div");
        newCardDisplay.id = "card";
        if (dealerHand.length==0){
            newCardDisplay.className += 'hiddenCard';
        }
    
        const cardIcon = document.createElement("i");
        if (newCard[0].includes("heart")){
            newCardDisplay.style.color = 'red';
            cardIcon.className += "bi bi-suit-heart-fill";
        } else if (newCard[0].includes("spade")){
            newCardDisplay.style.color = 'black';
            cardIcon.className += "bi bi-suit-spade-fill";
        } else if (newCard[0].includes("diamond")){
            newCardDisplay.style.color = 'red';
            cardIcon.className += "bi bi-suit-diamond-fill";
        } else if (newCard[0].includes("club")){
            newCardDisplay.style.color = 'black';
            cardIcon.className += "bi bi-suit-club-fill";
        }

        const cardLeft = document.createElement("p");
        if (parseInt(newCard) == 1 || parseInt(newCard) == 11) {
            cardLeft.innerHTML = "A";
            cardLeft.innerHTML += cardIcon.outerHTML;
        } else if (newCard[0].includes("10K")){
            cardLeft.innerHTML = "K";
            cardLeft.innerHTML += cardIcon.outerHTML;
        } else if (newCard[0].includes("10Q")){
            cardLeft.innerHTML = "Q";
            cardLeft.innerHTML += cardIcon.outerHTML;
        } else if (newCard[0].includes("10J")){
            cardLeft.innerHTML = "J";
            cardLeft.innerHTML += cardIcon.outerHTML;
        } else{
            cardLeft.innerHTML = parseInt(newCard);
            cardLeft.innerHTML += cardIcon.outerHTML;
        }
        cardLeft.classList.toggle("left");

        const cardRight = document.createElement("p");
        if (parseInt(newCard) == 1 || parseInt(newCard) == 11) {
            cardRight.innerHTML += cardIcon.outerHTML;
            cardRight.innerHTML += "A";
        } else if (newCard[0].includes("10K")){
            cardRight.innerHTML += cardIcon.outerHTML;
            cardRight.innerHTML += "K";
        } else if (newCard[0].includes("10Q")){
            cardRight.innerHTML += cardIcon.outerHTML;
            cardRight.innerHTML += "Q";
        } else if (newCard[0].includes("10J")){
            cardRight.innerHTML += cardIcon.outerHTML;
            cardRight.innerHTML += "J";
        } else{
            cardRight.innerHTML += cardIcon.outerHTML;
            cardRight.innerHTML += parseInt(newCard);
        }
        cardRight.classList.toggle("right");


        dealerHand.push(newCard);
        cardsRemaining -= 1;
        cardsRemainingDisplay.innerText = `Cards left: ${cardsRemaining}`;
        newCardDisplay.append(cardLeft);
        newCardDisplay.append(cardRight);
        if (dealerHand.length==0){
            newCardDisplay.classList.toggle("hiddenCard");
        }
        dealerHandWrapper.append(newCardDisplay);
    }
}
function calcScore(hand) {
    playerScore = 0;
    for (let i = 0; i < hand.length; i++){
        if (parseInt(hand[i]) == 1 && playerScore<=21 ){
            let ace = '1';
            hand[i] = ace.concat(hand[i]);
            console.log('ACE set to 11.')
        }
        playerScore += parseInt(hand[i]);
    }
    for (let i = 0; i < hand.length; i++){
        if (parseInt(hand[i]) == 11 && playerScore>21 ){
                hand[i] = hand[i].slice(1);
                playerScore -= 10;
                console.log('ACE set to 1 by changing array, then subtracting.');
        }
    }
    playerHandDisplay.innerText = `Hand: ${playerHand}`
    playerScoreDisplay.innerText = `Score: ${playerScore}`;
    dealerHandDisplay.innerText = `Hand: Hidden Card + ${dealerHand[1]}`;
    dealerScoreDisplay.innerText = `Score: ${parseInt(dealerHand[1])}`;
    if (playerScore==21) {
        console.log(`BLACKJACK! Your payout is $${playerBet*1.5}!`);
        playerMoney += (playerBet*1.5);
        dealButton.disabled = false;
        hitButton.disabled = true;
        standButton.disabled = true;
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    }
    else if (playerScore>21) {
        console.log(`You lost $${playerBet}, better luck next time.`);
        playerMoney -= playerBet;
        dealButton.disabled = false;
        if (playerMoney<=0){
            dealButton.disabled = true;
        }
        hitButton.disabled = true;
        standButton.disabled = true;
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    }
}
function calcDealerScore(hand) {
    dealerScore = 0;
    for (let i = 0; i < hand.length; i++){
        if (parseInt(hand[i]) == 1 && dealerScore<=21 ){
            let ace = '1';
            hand[i] = ace.concat(hand[i]);
            console.log('ACE set to 11.')
        } 
        dealerScore += parseInt(hand[i]);
    }
    for (let i = 0; i < hand.length; i++){
        if (parseInt(hand[i]) == 11 && dealerScore>21 ){
            hand[i] = hand[i].slice(1);
            dealerScore -= 10;
            console.log('ACE set to 1 by changing array, then subtracting.')
        }
    }
    dealerHandDisplay.innerText = `Hand: ${dealerHand}`;
    dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
    if (dealerScore>=17 && dealerScore<=21 && playerScore == dealerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log('DRAW! No money will be lost.');
        console.log(`Balance: $${playerMoney}`);
        dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log('--------End of Round--------');
    } else if (dealerScore>=17 && dealerScore<=21 && dealerScore>playerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`Dealer wins! You lost $${playerBet}, better luck next time.`);
        dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
        playerMoney -= playerBet;
        if (playerMoney<=0){
            dealButton.disabled = true;
        }
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    } else if (dealerScore>=17 && dealerScore<=21 && dealerScore<playerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`CONGRATS! You win $${playerBet}!`);
        dealerScoreDisplay.innerText = `Score: ${dealerScore}`;
        playerMoney += playerBet;
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');

    } else if (dealerScore>21) {
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`CONGRATS! You won $${playerBet}!`);
        playerMoney += playerBet;
        playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
        playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
        playerBetDisplay.innerText = `Current Bet: $0`;
        console.log(`You have $${playerMoney} remaining.`);
        console.log('--------End of Round--------');
    } else if (dealerScore<17){
        dealerDrawCard();
    }
    
}

const depositButton = document.querySelector('#depositButton');
const dealButton = document.querySelector('#dealButton');
const hitButton = document.querySelector('#hitButton');
const standButton = document.querySelector('#standButton');
const resetButton = document.querySelector('#resetButton');
dealButton.disabled = true;
hitButton.disabled = true;
standButton.disabled = true;
depositButton.addEventListener('click', function (e){
    dealButton.disabled = false;
    console.log('--------Joining Game--------');
    playerMoney = parseInt(prompt('How much money would you like to deposit for chips?'));
    playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
    playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
})
dealButton.addEventListener('click', function (e){
    playerBet = 0;
    playerBet = parseInt(prompt('How much money would you like to bet on this hand?'));
    if (playerBet <= playerMoney){
        console.log('--------Deal--------');
        dealButton.disabled = true;
        hitButton.disabled = false;
        standButton.disabled = false;
        playerHand = [];
        playerHandWrapper.innerHTML = "";
        dealerHandWrapper.innerHTML = "";
        dealerHand = [];
        dealerScore = 0;
        playerBetDisplay.innerText = `Current Bet: $${playerBet}`;
        console.log(`Current Bet: $${playerBet}`);
        drawCard(cardDeck);
        dealerDrawCard(cardDeck);
        drawCard(cardDeck);
        dealerDrawCard(cardDeck);
        calcScore(playerHand);
        console.log(`There are ${cardsRemaining} cards left.`);
        console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
        console.log(`Dealer's hand is: 1 Hidden Card + ${dealerHand[1]}`);
        console.log('--------Deal Executed--------');
    } else {
        alert("Insufficient funds.");
    }
    
})
hitButton.addEventListener('click', function (e){
    console.log('--------Hit--------');
    console.log(`Current Bet: $${playerBet}`)
    drawCard(cardDeck);
    calcScore(playerHand);
    console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
    console.log(`There are ${cardsRemaining} cards left.`);
    console.log('--------Hit Executed--------');

})
standButton.addEventListener('click', function (e){
    dealButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
    console.log('--------Stand--------');
    console.log(`Current Bet: $${playerBet} Current Score: ${playerScore}`);
    console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
    console.log(`There are ${cardsRemaining} cards left.`);
    console.log('--------Stand Executed--------');
    const dealerHiddenCard = document.querySelector(".hiddenCard");
    dealerHiddenCard.classList.toggle('hiddenCard');
    setTimeout(function(){
        while (dealerScore<17){
            calcDealerScore(dealerHand);
        };
    }, 1000);
})
resetButton.addEventListener('click', function (e){
    playerHand = [];
    playerMoney = 0;
    playerMoneyDisplay.innerText = `Balance: $${playerMoney}`;
    playerBalanceDisplay.innerText = `Balance: $${playerMoney}`;
    playerBet = 0;
    playerBetDisplay.innerText = `Current Bet: $0`;
    dealerHand = [];
    dealerScore = 0;
    cardDeck = ['1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub', '1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub'];
    cardsRemaining = cardDeck.length;
    cardsRemainingDisplay.innerText = `Cards left: ${cardsRemaining}`;
    playerHandWrapper.innerHTML = "";
    dealerHandWrapper.innerHTML = "";
    playerHandDisplay.innerText = `Hand:`
    playerScoreDisplay.innerText = `Score: 0`;
    dealerHandDisplay.innerText = `Hand:`;
    dealerScoreDisplay.innerText = `Score: 0`;
})
