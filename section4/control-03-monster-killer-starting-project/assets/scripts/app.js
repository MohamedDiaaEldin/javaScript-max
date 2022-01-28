const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_VALUE = 20;

const MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 2;
//
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER ';

let battleLog = [];


let chosenMaxLife = getUserInput();
let currentMosterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBounesLife = true;

adjustHealthBars(chosenMaxLife)


function getUserInput(){
    let enterMaxLife ;
    try{
        // parsing int will not raise an error but just for practice
        enterMaxLife = parseInt(prompt('enter maximun life for you and monster ', 100));
        if (enterMaxLife <= 0 || isNaN(enterMaxLife)) {
            enterMaxLife = 100;
        }
    }
    catch (error){
        console.log(error)    
    }
    return enterMaxLife
}
function writeLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    switch(event){
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER'
            break ;    
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
    }
    battleLog.push(logEntry);
}


function reset() {
    currentMosterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound() {
    const intialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMosterHealth, currentPlayerHealth)
    if (hasBounesLife && currentPlayerHealth <= 0) {
        hasBounesLife = false;
        removeBonusLife();
        increasePlayerHealth(intialPlayerHealth);
        currentPlayerHealth = intialPlayerHealth;
        setPlayerHealth(intialPlayerHealth);
        alert('bouns life')
    }

    if (currentMosterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won!')
        writeLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMosterHealth, currentPlayerHealth)

    } else if (currentPlayerHealth <= 0 && currentMosterHealth > 0) {
        alert('you lose')
        writeLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMosterHealth, currentPlayerHealth)
    }
    else if (currentMosterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('you have a draw');
        writeLog(LOG_EVENT_GAME_OVER, 'DRAW', currentMosterHealth, currentPlayerHealth)
    }

    // reset game
    if (currentPlayerHealth <= 0 || currentMosterHealth <= 0) {
        reset()
    }
}

function attckMoster(attackType) {
    let attackDamage ;
    let logEvent ;
    if (attackType === MODE_ATTACK) {
        attackDamage = ATTACK_VALUE ;
        logEvent = LOG_EVENT_PLAYER_ATTACK ;
    }
    else {
        attackDamage = STRONG_ATTACK_VALUE ;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK ;
    }

    const monsterDamge = dealMonsterDamage(attackDamage);
    currentMosterHealth -= monsterDamge;
    writeLog(logEvent, monsterDamge, currentMosterHealth, currentPlayerHealth);
    endRound()
}

function attackHandler() {
    attckMoster(MODE_ATTACK)
}
function strongAttackHandler() {
    attckMoster(MODE_STRONG_ATTACK)
}

function healHandler() {
    let healValue = HEAL_VALUE;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't go over max heal")
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMosterHealth, currentPlayerHealth)
    endRound();

}

function printLoghandler(){
    // for each loop 
    // for of 
    for (const log  of battleLog){
        console.log('---------')
        // for in - key value 
        for (const k in log){
            console.log( k + '->' + log[k] )
        }
        
    }
    // for lop 
    // for (let i=0 ; i < battleLog.length ; i++){
    //     console.log(battleLog[i]) ;
    // }

    // /// while loop 
    // let i=0 ;
    // while( i<battleLog.length){
    //     console.log(battleLog[i])
    //     i++
    // }

}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healHandler)
logBtn.addEventListener('click', printLoghandler)