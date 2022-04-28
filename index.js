let input = prompt('Type a command to interact with the list:').toLowerCase();
let playerHand = [];
let playerMoney;
let playerBet;
let dealerHand = [];
let cardDeck = ['1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub', '1heart', '2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', '10Jheart', '10Qheart', '10Kheart', '1diamond', '2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', '10Jdiamond', '10Qdiamond', '10Kdiamond', '1spade', '2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', '10Jspade', '10Qspade', '10Kspade', '1club', '2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', '10Jclub', '10Qclub', '10Kclub'];
let cardsRemaining = cardDeck.length;
let playerScore = 0;
let dealerScore = 0;
function drawCard(deck) {
    let newCard = cardDeck.splice( Math.floor(Math.random()*cardDeck.length), 1 );
    playerHand.push(newCard);
    cardsRemaining -= 1;
}
function dealerDrawCard(deck) {
    if (dealerScore<17) {
        let newCard = cardDeck.splice( Math.floor(Math.random()*cardDeck.length), 1 );
        dealerHand.push(newCard);
        cardsRemaining -= 1;
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
    if (playerScore==21) {
        console.log(`BLACKJACK! Your payout is $${playerBet*1.5}!`);
        playerMoney += (playerBet*1.5);
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    }
    else if (playerScore>21) {
        console.log(`You lost $${playerBet}, better luck next time.`);
        playerMoney -= playerBet;
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
    if (dealerScore>=17 && dealerScore<=21 && playerScore == dealerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log('DRAW! No money will be lost.');
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    } else if (dealerScore>=17 && dealerScore<=21 && dealerScore>playerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`Dealer wins! You lost $${playerBet}, better luck next time.`);
        playerMoney -= playerBet;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');
    } else if (dealerScore>=17 && dealerScore<=21 && dealerScore<playerScore){
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`CONGRATS! You win $${playerBet}!`);
        playerMoney += playerBet;
        console.log(`Balance: $${playerMoney}`);
        console.log('--------End of Round--------');

    } else if (dealerScore>21) {
        console.log(`Dealer's current hand is: ${dealerHand} Total: ${dealerScore}`);
        console.log(`CONGRATS! You won $${playerBet}!`);
        playerMoney += playerBet;
        console.log(`You have $${playerMoney} remaining.`);
        console.log('--------End of Round--------');
    } else if (dealerScore<17){
        dealerDrawCard();
    }
    
}
// while (input !== 'quit' && input !== 'q') {
//     console.log('Command List: deal, hit, stand, double, quit');

//     if (input === 'join') {
//         console.log('--------Joining Game--------');
//         playerMoney = parseInt(prompt('How much money would you like to deposit for chips?'));
//         console.log(`Deposited: $${playerMoney}`);
//         console.log('Type deal to start playing!');
//     } else if (input === 'deal') {
//         playerHand = [];
//         dealerHand = [];
//         dealerScore = 0;
//         playerBet = 0;
//         console.log('--------Deal Executed--------');
//         playerBet = parseInt(prompt('How much money would you like to bet on this hand?'));
//         console.log(`Current Bet: $${playerBet}`);
//         drawCard(cardDeck);
//         dealerDrawCard(cardDeck);
//         drawCard(cardDeck);
//         dealerDrawCard(cardDeck);
//         calcScore(playerHand);
//         console.log(`There are ${cardsRemaining} cards left.`);
//         console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
//         console.log(`Dealer's hand is: 1 Hidden Card + ${dealerHand[1]}`);
//         console.log('--------Deal Executed--------');
//     } else if (input === 'hit') {
//         console.log('--------Hit Executed--------');
//         console.log(`Current Bet: $${playerBet}`)
//         drawCard(cardDeck);
//         calcScore(playerHand);
//         console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
//         console.log(`There are ${cardsRemaining} cards left.`);
//         console.log('--------Hit Executed--------');
//     } else if (input === 'stand') {
//         console.log('--------Stand Executed--------');
//         console.log(`Current Bet: $${playerBet} Current Score: ${playerScore}`);
//         console.log(`Your current hand is: ${playerHand} Total: ${playerScore}`);
//         console.log(`There are ${cardsRemaining} cards left.`);
//         console.log('--------Stand Executed--------');
//         while (dealerScore<17){
//             calcDealerScore(dealerHand);
//         };
    
//     } 
//     input = prompt('Type a command to interact with the game:').toLowerCase();
// }