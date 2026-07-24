var type = ["(None)", "Fire", "Water", "Grass", "Electric", "Flying", "Normal", "Ground", "Rock", "Psychic", "Bug",
            "Poison", "Fighting", "Ice", "Ghost", "Dark", "Steel", "Dragon", "Fairy"];

var boostMult = [1/6,1/5,1/4,1/3,1/2,2/3,1,1.5,2,2.5,3,3.5,4];
var playerMonboostAtk = 6;
var playerMonboostDef = 6;
var playerMonboostSpA = 6;
var playerMonboostSpD = 6;
var playerMonboostSpe = 6;
var playerMonboostAcc = 6;
var playerMonboostEva = 6;
var enemyMonboostAtk = 6;
var enemyMonboostDef = 6;
var enemyMonboostSpA = 6;
var enemyMonboostSpD = 6;
var enemyMonboostSpe = 6;
var enemyMonboostAcc = 6;
var enemyMonboostEva = 6;

var playerMoncurrentHP;
var playerMonmaxHP;
var playerMoncurrentAtk;
var playerMoncurrentDef;
var playerMoncurrentSpA;
var playerMoncurrentSpD;
var playerMoncurrentSpe;
var playerMoncurrentAcc;
var playerMoncurrentEva;
var enemyMoncurrentHP;
var enemyMonmaxHP;
var enemyMoncurrentAtk;
var enemyMoncurrentDef;
var enemyMoncurrentSpA;
var enemyMoncurrentSpD;
var enemyMoncurrentSpe;
var enemyMoncurrentAcc;
var enemyMoncurrentEva;

let attackingMonName;
let defendingMonName;
let attackingMonboostAtk;
let defendingMonboostDef;
let attackingMonboostSpA;
let defendingMonboostSpD;
let attackingMoncurrentAtk;
let defendingMoncurrentDef;
let attackingMoncurrentSpA;
let defendingMoncurrentSpD;
let attackingMonHP;
let defendingMonHP;

var physSpecSplit;
var playerPhysSpec;
var enemyPhysSpec;
var attackStat;
var defenseStat;

var moveAttackStat = ["playerMoncurrentAtk", "playerMoncurrentSpA"];
var damage;
var moveDamageRoll;
var moveEffective;
var stabBoost;

var playerChoice = null;
var enemyChoice = null;
var playerMoveChosen;
var enemyMoveChosen;
var enemyMovePick;

var flinched = false;
var moved = false;
var playerBurned = false;
var playerBurnMult = 1;
var enemyBurned = false;
var enemyBurnMult = 1;
var playerPoisoned = false;
var enemyPoisoned = false;
var playerParad = false;
var playerParaMult = 1;
var enemyParad = false;
var enemyParaMult = 1;
var attackerParad;
var playerFrozen = false;
var enemyFrozen = false;
var attackerFrozen;
var playerMoving = true;
var enemyMoving = true;
var attackerMoving;

var primaryType;
var secondaryType;
var playerMonMoveset;
var enemyMonMoveset;
var movePower;
var moveAccuracy;
var playerMovePicked;
var enemyMovePicked;
var playerMovePickedType;
var enemyMovePickedType;
var playerMovePickedPower;
var enemyMovePickedPower;
var playerMovePickedAcc;
var enemyMovePickedAcc;
var playerMovePickedPrio;
var enemyMovePickedPrio;
var playerMoveChoices;
var enemyMoveChoices;
var moveName;
var playerMonMoveType;
var enemyMonMoveType;
var moveType;
var playerMoves;
var enemyMoves;
var turnCounter = 0;

var monName = ["Koraidon", "Kyogre", "Zacian-Crowned", "Necrozma-Dusk-Mane", "Lunala", "Ho-Oh", "Arceus", "Eternatus", "Calyrex-Ice", "Hatterene", "Giratina-Origin", "Landorus-Therian"];
var playerMonPrimaryType = [type[12], type[2], type[16], type[9], type[9], type[1], type[6], type[11], type[9], type[9], type[14], type[7]];
var playerMonSecondaryType = [type[17], type[0], type[18], type[16], type[14], type[5], type[0], type[17], type[13], type[18], type[17], type[5]];
var enemyMonPrimaryType = [type[12], type[2], type[16], type[9], type[9], type[1], type[6], type[11], type[9], type[9], type[14], type[7]];
var enemyMonSecondaryType = [type[17], type[0], type[18], type[16], type[14], type[5], type[0], type[17], type[13], type[18], type[17], type[5]];
var playerMonbaseHP = [100, 100, 92, 97, 137, 106, 120, 140, 100, 57, 150, 89];
var playerMonbaseAtk = [135, 100, 150, 157, 113, 130, 120, 85, 165, 90, 120, 145];
var playerMonbaseDef = [115, 90, 115, 127, 89, 90, 120, 95, 150, 95, 100, 90];
var playerMonbaseSpA = [85, 150, 80, 113, 137, 110, 120, 145, 85, 136, 100, 105];
var playerMonbaseSpD = [100, 140, 115, 109, 107, 154, 120, 95, 130, 103, 120, 80];
var playerMonbaseSpe = [135, 90, 148, 77, 97, 90, 120, 130, 50, 29, 90, 91];
var enemyMonbaseHP = [100, 100, 92, 97, 137, 106, 120, 140, 100, 57, 150, 89];
var enemyMonbaseAtk = [135, 100, 150, 157, 113, 130, 120, 85, 165, 90, 120, 145];
var enemyMonbaseDef = [115, 90, 115, 127, 89, 90, 120, 95, 150, 95, 100, 90];
var enemyMonbaseSpA = [85, 150, 80, 113, 137, 110, 120, 145, 85, 136, 100, 105];
var enemyMonbaseSpD = [100, 140, 115, 109, 107, 154, 120, 95, 130, 103, 120, 80];
var enemyMonbaseSpe = [135, 90, 148, 77, 97, 90, 120, 130, 50, 29, 90, 91];
var moveOne = ["Dragon Claw", "Origin Pulse", "Behemoth Blade", "Photon Geyser", "Moongeist Beam", "Sacred Fire", "Extreme Speed", "Dynamax Cannon", "Glacial Lance", "Psychic", "Poltergeist", "Earthquake"];
var moveTwo = ["Low Kick", "Thunderbolt", "Play Rough", "Sunsteel Strike", "Psychic", "Brave Bird", "Double-Edge", "Sludge Bomb", "High Horsepower", "Dazzling Gleam", "Dragon Claw", "U-Turn"];
var moveThree = ["Flare Blitz", "Ice Beam", "Wild Charge", "Earthquake", "Moonblast", "Earthquake", "Earthquake", "Flamethrower", "Close Combat", "Mystical Fire", "Earthquake", "Stone Edge"];
var moveFour = ["U-Turn", "Ancient Power", "Close Combat", "Knock Off", "Focus Blast", "Iron Head", "Shadow Claw", "Flash Cannon", "Iron Head", "Draining Kiss", "Shadow Sneak", "Crunch"];
var moveOneType = [type[17], type[2], type[16], type[9], type[14], type[1], type[6], type[17], type[13], type[9], type[14], type[7]];
var moveTwoType = [type[12], type[4], type[18], type[16], type[9], type[5], type[6], type[11], type[7], type[18], type[17], type[10]];
var moveThreeType = [type[1], type[13], type[4], type[7], type[18], type[7], type[7], type[1], type[12], type[1], type[7], type[8]];
var moveFourType = [type[10], type[8], type[12], type[15], type[12], type[16], type[14], type[16], type[16], type[18], type[14], type[15]];
var moveOnePower = [60, 110, 100, 100, 100, 100, 90, 100, 120, 90, 110, 100];
var moveTwoPower = [90, 90, 90, 100, 90, 120, 120, 90, 95, 80, 60, 80];
var moveThreePower = [120, 90, 120, 100, 90, 100, 100, 90, 120, 75, 100, 100];
var moveFourPower = [80, 60, 120, 110, 130, 80, 70, 80, 80, 75, 40, 80];
var moveOneAcc = [100, 90, 100, 100, 100, 95, 100, 100, 100, 100, 90, 100];
var moveTwoAcc = [100, 100, 90, 100, 100, 100, 100, 100, 90, 100, 100, 100];
var moveThreeAcc = [100, 100, 100, 100, 100, 100, 100, 100, 100, 1000, 100, 80];
var moveFourAcc = [100, 100, 100, 100, 70, 100, 100, 100, 100, 100, 100, 100];
var moveOnePrio = [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
var moveTwoPrio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moveThreePrio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var moveFourPrio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];

function monSelection() {
  playerChoice = prompt(`Choose a mon or choose random. \n[0]: ${monName[0]} \n[1]: ${monName[1]} \n[2]: ${monName[2]} \n[3]: ${monName[3]} \n[4]: ${monName[4]} \n[5]: ${monName[5]} \n[6]: ${monName[6]} \n[7]: ${monName[7]} \n[8]: ${monName[8]} \n[9]: ${monName[9]} \n[10]: ${monName[10]} \n[11]: ${monName[11]} \n[R]: Random.`);
  if(playerChoice == "0" || playerChoice == "1" || playerChoice == "2" || playerChoice == "3" || playerChoice == "4" || playerChoice == "5" || playerChoice == "6" || playerChoice == "7" || playerChoice == "8" || playerChoice == "9" || playerChoice == "10" || playerChoice == "11") {
    monPicked();
  } else if(playerChoice == "R" || playerChoice == "r") {
      playerChoice = Math.floor(Math.random() * 12);
      monPicked();
  } else {
    alert("Invalid choice.");
    monSelection();
  }
}

function monPicked() {
  console.log(monName[playerChoice]);
  console.log("Moveset: " + moveOne[playerChoice] + ", " + moveTwo[playerChoice] + ", " + moveThree[playerChoice] + ", " + moveFour[playerChoice]);
  if(playerChoice == 0 || playerChoice == 2 || playerChoice == 3 || playerChoice == 5 || playerChoice == 6 || playerChoice == 8 || playerChoice == 10 || playerChoice == 11) {
    playerPhysSpec = "Physical";
  } else if(playerChoice == 1 || playerChoice == 4 || playerChoice == 7 || playerChoice == 9) {
    playerPhysSpec = "Special";
  }
  playerMoveChoices = [moveOne[playerChoice], moveTwo[playerChoice], moveThree[playerChoice], moveFour[playerChoice]];
  enemyChoice = Math.floor(Math.random() * 12);
  if(enemyChoice == 0 || enemyChoice == 2 || enemyChoice == 3 || enemyChoice == 5 || enemyChoice == 6 || enemyChoice == 8 || enemyChoice == 10 || enemyChoice == 11) {
    enemyPhysSpec = "Physical";
  } else if(enemyChoice == 1 || enemyChoice == 4 || enemyChoice == 7 || enemyChoice == 9) {
    enemyPhysSpec = "Special";
  }
  console.log(`Your ${monName[playerChoice]}'s moves are ${playerPhysSpec}. The opponent's ${monName[enemyChoice]}'s moves are ${enemyPhysSpec}.`);
}

function statCalc() {
  
  playerMonmaxHP = playerMoncurrentHP = Math.floor((2 * playerMonbaseHP[playerChoice] + 31)) + 15;
  playerMoncurrentAtk = (Math.floor((2 * playerMonbaseAtk[playerChoice] + 31)) + 5) * boostMult[playerMonboostAtk] * playerBurnMult;
  playerMoncurrentDef = (Math.floor((2 * playerMonbaseDef[playerChoice] + 31)) + 5) * boostMult[playerMonboostDef];
  playerMoncurrentSpA = (Math.floor((2 * playerMonbaseSpA[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpA];
  playerMoncurrentSpD = (Math.floor((2 * playerMonbaseSpD[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpD];
  playerMoncurrentSpe = (Math.floor((2 * playerMonbaseSpe[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpe] * playerParaMult;
  
  enemyMonmaxHP = enemyMoncurrentHP = Math.floor((2 * enemyMonbaseHP[enemyChoice] + 31)) + 15;
  enemyMoncurrentAtk = (Math.floor((2 * enemyMonbaseAtk[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostAtk] * enemyBurnMult;
  enemyMoncurrentDef = (Math.floor((2 * enemyMonbaseDef[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostDef];
  enemyMoncurrentSpA = (Math.floor((2 * enemyMonbaseSpA[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpA];
  enemyMoncurrentSpD = (Math.floor((2 * enemyMonbaseSpD[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpD];
  enemyMoncurrentSpe = (Math.floor((2 * enemyMonbaseSpe[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpe] * enemyParaMult;
}

function movePick() {
  playerMoveChosen = prompt(`Select a move to use. Type [0] for ${moveOne[playerChoice]}, [1] for ${moveTwo[playerChoice]}, [2] for ${moveThree[playerChoice]}, or [3] for ${moveFour[playerChoice]}.`);
  switch(playerMoveChosen) {
    case ("0"):
      playerMovePicked = moveOne[playerChoice];
      playerMovePickedType = moveOneType[playerChoice];
      playerMovePickedPower = moveOnePower[playerChoice];
      playerMovePickedAcc = moveOneAcc[playerChoice];
      playerMovePickedPrio = moveOnePrio[playerChoice];
      break;
    case ("1"): 
      playerMovePicked = moveTwo[playerChoice];
      playerMovePickedType = moveTwoType[playerChoice];
      playerMovePickedPower = moveTwoPower[playerChoice];
      playerMovePickedAcc = moveTwoAcc[playerChoice];
      playerMovePickedPrio = moveTwoPrio[playerChoice];
      break;
    case ("2"): 
      playerMovePicked = moveThree[playerChoice];
      playerMovePickedType = moveThreeType[playerChoice];
      playerMovePickedPower = moveThreePower[playerChoice];
      playerMovePickedPrio = moveThreePrio[playerChoice];
      playerMovePickedAcc = moveThreeAcc[playerChoice];
      break;
    case ("3"):
      playerMovePicked = moveFour[playerChoice];
      playerMovePickedType = moveFourType[playerChoice];
      playerMovePickedPower = moveFourPower[playerChoice];
      playerMovePickedAcc = moveFourAcc[playerChoice];
      playerMovePickedPrio = moveFourPrio[playerChoice];
      break;
  }
  enemyMoveChosen = Math.floor(Math.random() * 4);
  switch(enemyMoveChosen) {
    case (0):
      enemyMovePicked = moveOne[enemyChoice];
      enemyMovePickedType = moveOneType[enemyChoice];
      enemyMovePickedPower = moveOnePower[enemyChoice];
      enemyMovePickedAcc = moveOneAcc[enemyChoice];
      enemyMovePickedPrio = moveOnePrio[enemyChoice];
      break;
    case (1): 
      enemyMovePicked = moveTwo[enemyChoice];
      enemyMovePickedType = moveTwoType[enemyChoice];
      enemyMovePickedPower = moveTwoPower[enemyChoice];
      enemyMovePickedAcc = moveTwoAcc[enemyChoice];
      enemyMovePickedPrio = moveTwoPrio[enemyChoice];
      break;
    case (2): 
      enemyMovePicked = moveThree[enemyChoice];
      enemyMovePickedType = moveThreeType[enemyChoice];
      enemyMovePickedPower = moveThreePower[enemyChoice];
      enemyMovePickedAcc = moveThreeAcc[enemyChoice];
      enemyMovePickedPrio = moveThreePrio[enemyChoice];
      break;
    case (3):
      enemyMovePicked = moveFour[enemyChoice];
      enemyMovePickedType = moveFourType[enemyChoice];
      enemyMovePickedPower = moveFourPower[enemyChoice];
      enemyMovePickedAcc = moveFourAcc[enemyChoice];
      enemyMovePickedPrio = moveFourPrio[enemyChoice];
      break;
  }

  if(playerParad && Math.random() * 100 < 25) {
    playerMoving = false;
  } else if(playerFrozen && Math.random() * 100 < 80) {
    playerMoving = false;
  } else if(playerParad) {
    console.log(`${monName[playerChoice]} broke through its paralysis!`);
    divElement.innerHTML += `<br><br>${monName[playerChoice]} broke through its paralysis!`
  }
  else if(playerFrozen) {
    playerFrozen = false;
    console.log(`${monName[playerChoice]} thawed out!`);
    divElement.innerHTML += `<br><br>${monName[playerChoice]} thawed out!`
  }
  else {
    playerMoving = true;
  }
  if(enemyParad && Math.random() * 100 < 25) {
    enemyMoving = false;
  } else if(enemyFrozen && Math.random() * 100 < 80) {
    enemyMoving = false;
  } else if(enemyParad) {
    console.log(`${monName[enemyChoice]} broke through its paralysis!`);
    divElement.innerHTML += `<br><br>${monName[enemyChoice]} broke through its paralysis!`
  }
  else if(enemyFrozen) {
    enemyFrozen = false;
    console.log(`${monName[enemyChoice]} thawed out!`);
    divElement.innerHTML += `<br><br>${monName[enemyChoice]} thawed out!`
  }
  else {
    enemyMoving = true;
  }

  moved = false;
  if(playerMovePickedPrio > enemyMovePickedPrio) {
    moveCalc("player");
    if(enemyMoncurrentHP > 0 && !flinched) {
      moveCalc("enemy");
    }
  }
  else if(enemyMovePickedPrio > playerMovePickedPrio) {
    moveCalc("enemy");
    if(playerMoncurrentHP > 0 && !flinched) {
      moveCalc("player");
    }
  }
  else if(playerMovePickedPrio == enemyMovePickedPrio) {
    if(playerMoncurrentSpe > enemyMoncurrentSpe) {
      moveCalc("player");
      moved = true;
      if(enemyMoncurrentHP > 0 && !flinched) {
        moveCalc("enemy");
      }
    } else if(playerMoncurrentSpe < enemyMoncurrentSpe) {
      moveCalc("enemy");
      moved = true;
      if(playerMoncurrentHP > 0 && !flinched) {
        moveCalc("player");
      }
    } else if(playerMoncurrentSpe == enemyMoncurrentSpe) {
      if(2 * Math.random() > 1) {
        moveCalc("player");
        moved = true;
        if(enemyMoncurrentHP > 0 && !flinched) {
          moveCalc("enemy");
        }
      } else {
        moveCalc("enemy");
        moved = true;
        if(playerMoncurrentHP > 0 && !flinched) {
          moveCalc("player");
        }
      }
    }
  }
}

function currentStatCalc(moving) {
  if(moving == "player") {
    let attackingMonboostAtk = playerMonboostAtk;
    let attackingMonboostDef = playerMonboostDef;
    let attackingMonboostSpA = playerMonboostSpA;
    let attackingMonboostSpD = playerMonboostSpD;
    let defendingMonboostDef = enemyMonboostDef;
    let defendingMonboostSpD = enemyMonboostSpD;
    let attackingMoncurrentAtk = playerMoncurrentAtk;
    let attackingMoncurrentDef = playerMoncurrentDef;
    let attackingMoncurrentSpA = playerMoncurrentSpA;
    let attackingMoncurrentSpD = playerMoncurrentSpD;
    let defendingMoncurrentDef = enemyMoncurrentDef;    
    let defendingMoncurrentSpD = enemyMoncurrentSpD;
    
  } else if(moving == "enemy") {
    let attackingMonboostAtk = enemyMonboostAtk;
    let attackingMonboostDef = enemyMonboostDef;
    let attackingMonboostSpA = enemyMonboostSpA;
    let attackingMonboostSpD = enemyMonboostSpD;
    let defendingMonboostDef = playerMonboostDef;
    let defendingMonboostSpD = playerMonboostSpD;
    let attackingMoncurrentAtk = enemyMoncurrentAtk;
    let attackingMoncurrentDef = enemyMoncurrentDef;
    let attackingMoncurrentSpA = enemyMoncurrentSpA;
    let attackingMoncurrentSpD = enemyMoncurrentSpD;
    let defendingMoncurrentDef = playerMoncurrentDef;    
    let defendingMoncurrentSpD = playerMoncurrentSpD;
  }
}
function calcMoveEffective(moving) {
  if(moving == "player") {
    moveType = playerMovePickedType;
    attackerPrimaryType = playerMonPrimaryType[playerChoice]
    attackerSecondaryType = playerMonSecondaryType[playerChoice]
    primaryType = enemyMonPrimaryType[enemyChoice];
    secondaryType = enemyMonSecondaryType[enemyChoice];
    
  } else if(moving == "enemy") {
    moveType = enemyMovePickedType;
    attackerPrimaryType = enemyMonPrimaryType[enemyChoice]
    attackerSecondaryType = enemyMonSecondaryType[enemyChoice]
    primaryType = playerMonPrimaryType[playerChoice];
    secondaryType = playerMonSecondaryType[playerChoice];
  }
  moveEffective = 1;
  if(
(moveType == (type[1]) && (primaryType == (type[3]) || primaryType == (type[10]) || primaryType == (type[13]) || primaryType == (type[16])))
||
(moveType == (type[2]) && (primaryType == (type[1]) || primaryType == (type[7]) || primaryType == (type[8])))
||
(moveType == (type[3]) && (primaryType == (type[2]) || primaryType == (type[7]) || primaryType == (type[8])))
||
(moveType == (type[4]) && (primaryType == (type[2]) || primaryType == (type[5])))
||
(moveType == (type[5]) && (primaryType == (type[3]) || primaryType == (type[10]) || primaryType == (type[12])))
||
(moveType == (type[7]) && (primaryType == (type[1]) || primaryType == (type[4]) || primaryType == (type[8]) || primaryType == (type[11]) || primaryType == (type[16])))
||
(moveType == (type[8]) && (primaryType == (type[1]) || primaryType == (type[5]) || primaryType == (type[10]) || primaryType == (type[13])))
||
(moveType == (type[9]) && (primaryType == (type[11]) || primaryType == (type[12])))
||
(moveType == (type[10]) && (primaryType == (type[3]) || primaryType == (type[9]) || primaryType == (type[15])))
||
(moveType == (type[11]) && (primaryType == (type[3]) || primaryType == (type[18])))
||
(moveType == (type[12]) && (primaryType == (type[6]) || primaryType == (type[8]) || primaryType == (type[13]) || primaryType == (type[15]) || primaryType == (type[16])))
||
(moveType == (type[13]) && (primaryType == (type[3]) || primaryType == (type[5]) || primaryType == (type[7]) || primaryType == (type[17])))
||
(moveType == (type[14]) && (primaryType == (type[9]) || primaryType == (type[14])))
||
(moveType == (type[15]) && (primaryType == (type[9]) || primaryType == (type[14])))
||
(moveType == (type[16]) && (primaryType == (type[8]) || primaryType == (type[13]) || primaryType == (type[18])))
||
(moveType == (type[17]) && primaryType == (type[17]))
||
(moveType == (type[18]) && (primaryType == (type[12]) || primaryType == (type[15]) || primaryType == (type[17])))
      ) {
moveEffective *= 2
      }
      if
(
(moveType == (type[1]) && (
secondaryType == (type[3]) || secondaryType == (type[10]) ||
secondaryType == (type[13]) || secondaryType == (type[16])
)
)
||
(moveType == (type[2]) && (
secondaryType == (type[1]) || secondaryType == (type[7]) ||
secondaryType == (type[8])
)
)
||
(moveType == (type[3]) && (
secondaryType == (type[2]) || secondaryType == (type[7]) ||
secondaryType == (type[8])
)
)
||
(moveType == (type[4]) && (
secondaryType == (type[2]) || secondaryType == (type[5])
)
)
||
(moveType == (type[5]) && (
secondaryType == (type[3]) || secondaryType == (type[10]) ||
secondaryType == (type[12])
)
)
||
(moveType == (type[7]) && (
secondaryType == (type[1]) || secondaryType == (type[4]) ||
secondaryType == (type[8]) || secondaryType == (type[11]) ||
secondaryType == (type[16])
)
)
||
(moveType == (type[8]) && (
secondaryType == (type[1]) || secondaryType == (type[5]) ||
secondaryType == (type[10]) || secondaryType == (type[13])
)
)
||
(moveType == (type[9]) && (
secondaryType == (type[11]) || secondaryType == (type[12])
)
)
||
(moveType == (type[10]) && (
secondaryType == (type[3]) || secondaryType == (type[9]) ||
secondaryType == (type[15])
)
)
||
(moveType == (type[11]) && (
secondaryType == (type[3]) || secondaryType == (type[18])
)
)
||
(moveType == (type[12]) && (
secondaryType == (type[6]) || secondaryType == (type[8]) ||
secondaryType == (type[13]) || secondaryType == (type[15]) ||
secondaryType == (type[16])
)
)
||
(moveType == (type[13]) && (
secondaryType == (type[3]) || secondaryType == (type[5]) ||
secondaryType == (type[7]) || secondaryType == (type[17])
)
)
||
(moveType == (type[14]) && (
secondaryType == (type[9]) || secondaryType == (type[14])
)
)
||
(moveType == (type[15]) && (
secondaryType == (type[9]) || secondaryType == (type[14])
)
)
||
(moveType == (type[16]) && (
secondaryType == (type[8]) || secondaryType == (type[18])
)
)
||
(moveType == (type[17]) && secondaryType == (type[17])
)
||
(moveType == (type[18]) && (
secondaryType == (type[12]) || secondaryType == (type[15]) ||
secondaryType == (type[17])
)
)
)
{
    moveEffective *= 2;
}


if(
(moveType == (type[1]) && (
primaryType == (type[1]) || primaryType == (type[2]) ||
primaryType == (type[8]) || primaryType == (type[17])
)
)
||
(moveType == (type[2]) && (
primaryType == (type[2]) || primaryType == (type[3]) ||
primaryType == (type[17])
)
)
||
(moveType == (type[3]) && (
primaryType == (type[1]) || primaryType == (type[3]) ||
primaryType == (type[5]) || primaryType == (type[10]) ||
primaryType == (type[11]) || primaryType == (type[16]) ||
primaryType == (type[17])
)
)
||
(moveType == (type[4]) && (
primaryType == (type[3]) || primaryType == (type[4]) ||
primaryType == (type[17])
)
)
||
(moveType == (type[5]) && (
primaryType == (type[4]) || primaryType == (type[8]) ||
primaryType == (type[16])
)
)
||
(moveType == (type[7]) && (
primaryType == (type[3]) || primaryType == (type[10])
)
)
||
(moveType == (type[8]) && (
primaryType == (type[7]) || primaryType == (type[12]) ||
primaryType == (type[16])
)
)
||
(moveType == (type[9]) && (
primaryType == (type[9]) || primaryType == (type[16])
)
)
||
(moveType == (type[10]) && (
primaryType == (type[1]) || primaryType == (type[5]) ||
primaryType == (type[11]) || primaryType == (type[12]) ||
primaryType == (type[14]) || primaryType == (type[16]) ||
primaryType == (type[18])
)
)
||
(moveType == (type[11]) && (
primaryType == (type[7]) || primaryType == (type[8]) ||
primaryType == (type[11]) || primaryType == (type[14])
)
)
||
(moveType == (type[12]) && (
primaryType == (type[5]) || primaryType == (type[9]) ||
primaryType == (type[10]) || primaryType == (type[11]) ||
primaryType == (type[18])
)
)
||
(moveType == (type[13]) && (
primaryType == (type[1]) || primaryType == (type[2]) ||
primaryType == (type[13]) || primaryType == (type[16])
)
)
||
(moveType == (type[14]) &&
primaryType == (type[15])
)
||
(moveType == (type[15]) && (
primaryType == (type[12]) || primaryType == (type[15]) || 
primaryType == (type[18])
)
)
||
(moveType == (type[16]) && (
primaryType == (type[1]) || primaryType == (type[2]) ||
primaryType == (type[4]) || primaryType == (type[16])
)
)
||
(moveType == (type[17]) && primaryType == (type[16])
)
||
(moveType == (type[18]) && (
primaryType == (type[1]) || primaryType == (type[11]) ||
primaryType == (type[16])
)
    )
) {
moveEffective /= 2
}
if
(
(moveType == (type[1]) && (
secondaryType == (type[1]) || secondaryType == (type[2]) ||
secondaryType == (type[8]) || secondaryType == (type[17])
)
)
||
(moveType == (type[2]) && (
secondaryType == (type[2]) || secondaryType == (type[3]) ||
secondaryType == (type[17])
)
)
||
(moveType == (type[3]) && (
secondaryType == (type[1]) || secondaryType == (type[3]) ||
secondaryType == (type[5]) || secondaryType == (type[10]) ||
secondaryType == (type[11]) || secondaryType == (type[16]) ||
secondaryType == (type[17])
)
)
||
(moveType == (type[4]) && (
secondaryType == (type[3]) || secondaryType == (type[4]) ||
secondaryType == (type[17])
)
)
||
(moveType == (type[5]) && (
secondaryType == (type[4]) || secondaryType == (type[8]) ||
secondaryType == (type[16])
)
)
||
(moveType == (type[7]) && (
secondaryType == (type[3]) || secondaryType == (type[10])
)
)
||
(moveType == (type[8]) && (
secondaryType == (type[7]) || secondaryType == (type[12]) ||
secondaryType == (type[16])
)
)
||
(moveType == (type[9]) && (
secondaryType == (type[9]) || secondaryType == (type[16])
)
)
||
(moveType == (type[10]) && (
secondaryType == (type[1]) || secondaryType == (type[5]) ||
secondaryType == (type[11]) || secondaryType == (type[12]) ||
secondaryType == (type[14]) || secondaryType == (type[16]) ||
secondaryType == (type[18])
)
)
||
(moveType == (type[11]) && (
secondaryType == (type[7]) || secondaryType == (type[8]) ||
secondaryType == (type[11]) || secondaryType == (type[14])
)
)
||
(moveType == (type[12]) && (
secondaryType == (type[5]) || secondaryType == (type[9]) ||
secondaryType == (type[10]) || secondaryType == (type[11]) ||
secondaryType == (type[18])
)
)
||
(moveType == (type[13]) && (
secondaryType == (type[1]) || secondaryType == (type[2]) ||
secondaryType == (type[13]) || secondaryType == (type[16])
)
)
||
(moveType == (type[14]) &&
secondaryType == (type[15])
)
||
(moveType == (type[15]) && (
secondaryType == (type[12]) || secondaryType == (type[15]) ||
secondaryType == (type[18])
)
)
||
(moveType == (type[16]) && (
secondaryType == (type[1]) || secondaryType == (type[2]) ||
secondaryType == (type[4]) || secondaryType == (type[16])
)
)
||
(moveType == (type[17]) && secondaryType == (type[16])
)
||
(moveType == (type[18]) && (
secondaryType == (type[1]) || secondaryType == (type[11]) ||
secondaryType == (type[16])
)
)
)
{
    moveEffective /= 2;
}

if(
(moveType == type[4]) && (primaryType == (type[7]) || secondaryType == (type[7]))
||
(moveType == type[6]) && (primaryType == (type[14]) || secondaryType == (type[14]))
||
(moveType == type[7]) && (primaryType == (type[5]) || secondaryType == (type[5]))
||
(moveType == type[9]) && (primaryType == (type[15]) || secondaryType == (type[15]))
||
(moveType == type[11]) && (primaryType == (type[16]) || secondaryType == (type[16]))
||
(moveType == type[12]) && (primaryType == (type[14]) || secondaryType == (type[14]))
||
(moveType == type[14]) && (primaryType == (type[6]) || secondaryType == (type[6]))
||
(moveType == type[17]) && (primaryType == (type[18]) || secondaryType == (type[18]))
)
  {
    moveEffective = 0;
    console.log("immune");
  }
  if(moveType == attackerPrimaryType || moveType == attackerSecondaryType) {
    stabBoost = 1.5;
  } else {
    stabBoost = 1;
  }

  console.log(`${moveType} against ${primaryType}/${secondaryType}: ${moveEffective}x effective.`);
}

function damageCalc(moving, effective) {
  if(moving == "player") {
    physSpecSplit = playerPhysSpec;
    moveName = playerMovePicked;
    movePower = playerMovePickedPower;
    moveAccuracy = playerMovePickedAcc;
    attackerMoving = playerMoving;
    attackerParad = playerParad;
    attackerFrozen = playerFrozen;
    attackingMonName = monName[playerChoice];
    defendingMonName = monName[enemyChoice];
    attackingMoncurrentAtk = playerMoncurrentAtk;
    attackingMoncurrentSpA = playerMoncurrentSpA;
    attackingMonboostAtk = playerMonboostAtk;
    attackingMonboostDef = playerMonboostDef;
    attackingMonboostSpA = playerMonboostSpA;
    attackingMonboostSpD = playerMonboostSpD;
    defendingMoncurrentDef = enemyMoncurrentDef;    
    defendingMoncurrentSpD = enemyMoncurrentSpD;
    defendingMonboostDef = enemyMonboostDef;
    defendingMonboostSpD = enemyMonboostSpD;
    attackingMonHP = playerMoncurrentHP;
    defendingMonHP = enemyMoncurrentHP;
    defendingMonMaxHP = enemyMonmaxHP;
    defendingMonPrimaryType = enemyMonPrimaryType;
    defendingMonSecondaryType = enemyMonSecondaryType;
    
  } else if(moving == "enemy") {
    physSpecSplit = enemyPhysSpec;
    moveName = enemyMovePicked;
    movePower = enemyMovePickedPower;
    moveAccuracy = enemyMovePickedAcc;
    attackerMoving = enemyMoving;
    attackerParad = enemyParad;
    attackerFrozen = enemyFrozen;
    attackingMonName = monName[enemyChoice];
    defendingMonName = monName[playerChoice];
    attackingMoncurrentAtk = enemyMoncurrentAtk;
    attackingMoncurrentDef = enemyMoncurrentDef;
    attackingMoncurrentSpA = enemyMoncurrentSpA;
    attackingMoncurrentSpD = enemyMoncurrentSpD;
    attackingMoncurrentAtk = enemyMoncurrentAtk;
    attackingMoncurrentSpA = enemyMoncurrentSpA;
    defendingMoncurrentDef = playerMoncurrentDef;    
    defendingMoncurrentSpD = playerMoncurrentSpD;
    defendingMonboostDef = playerMonboostDef;
    defendingMonboostSpD = playerMonboostSpD;
    attackingMonHP = enemyMoncurrentHP;
    defendingMonHP = playerMoncurrentHP;
    defendingMonMaxHP = playerMonmaxHP;
    defendingMonPrimaryType = playerMonPrimaryType;
    defendingMonSecondaryType = playerMonSecondaryType;
  }

  switch(physSpecSplit) {
    case ("Physical"):
      attackStat = attackingMoncurrentAtk;
      defenseStat = defendingMoncurrentDef;
      break;
    case ("Special"):
      attackStat = attackingMoncurrentSpA;
      defenseStat = defendingMoncurrentSpD;
      break;
  } 
  damage = Math.round((0.8 * movePower * attackStat / defenseStat) * (0.85 + Math.floor(Math.random() * 15)/100) * moveEffective * stabBoost);
  if(damage > defendingMonHP) {
    damage = defendingMonHP;
  }
  if(Math.random()*100 <= moveAccuracy && attackerMoving) {
    defendingMonHP -= damage;
    console.log(`${moveName} did ${damage} damage (${Math.round(1000 * damage/defendingMonMaxHP) / 10}%) to ${defendingMonName}.`);
    alert(`${moveName} did ${damage} damage (${Math.round(1000 * damage/defendingMonMaxHP) / 10}%) to ${defendingMonName}.`);
    divElement.innerHTML += `<br><br>${moveName} did ${damage} damage (${Math.round(1000 * damage/defendingMonMaxHP) / 10}%) to ${defendingMonName}.`
    if(defendingMonHP > 0) {
      switch(moveName) {
          default:
              flinched = false;
              break;
          case "Psychic": case "Earth Power": case "Focus Blast": case "Flash Cannon":
              if(Math.random() * 100 < 10) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerMonboostSpD--;
                      playerMoncurrentSpD = Math.floor((2 * playerMonbaseSpD[enemyChoice] + 31) * boostMult[playerMonboostSpD]) + 5;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyMonboostSpD--;
                      enemyMoncurrentSpD = Math.floor((2 * enemyMonbaseSpD[enemyChoice] + 31) * boostMult[enemyMonboostSpD]) + 5;
                  }
                  console.log(`${defendingMonName}'s Special Defense fell!`);
                  alert(`${defendingMonName}'s Special Defense fell!`);
                  divElement.innerHTML += `<br><br>${defendingMonName}'s Special Defense fell!`
              }
              break;
          case "Moonblast":
              if(Math.random() * 100 < 10) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerMonboostSpA--;
                      playerMoncurrentSpA = Math.floor((2 * playerMonbaseSpA[enemyChoice] + 31) * boostMult[playerMonboostSpA]) + 5;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyMonboostSpA--;
                      enemyMoncurrentSpA = Math.floor((2 * enemyMonbaseSpA[enemyChoice] + 31) * boostMult[enemyMonboostSpA]) + 5;
                  }
                  console.log(`${defendingMonName}'s Special Attack fell!`);
                  alert(`${defendingMonName}'s Special Attack fell!`);
                  divElement.innerHTML += `<br><br>${defendingMonName}'s Special Attack fell!`
              }
              break;
          case "Mystical Fire":
              if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                  playerMonboostSpA--;
                  playerMoncurrentSpA = Math.floor((2 * playerMonbaseSpA[enemyChoice] + 31) * boostMult[playerMonboostSpA]) + 5;
              }
              if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                  enemyMonboostSpA--;
                  enemyMoncurrentSpA = Math.floor((2 * enemyMonbaseSpA[enemyChoice] + 31) * boostMult[enemyMonboostSpA]) + 5;
              }
              console.log(`${defendingMonName}'s Special Attack fell!`);
              alert(`${defendingMonName}'s Special Attack fell!`);
              divElement.innerHTML += `<br><br>${defendingMonName}'s Special Attack fell!`
              break;
          case "Play Rough":
              if(Math.random() * 100 < 10) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerMonboostAtk--;
                      playerMoncurrentAtk = Math.floor((2 * playerMonbaseAtk[enemyChoice] + 31) * boostMult[playerMonboostAtk]) + 5;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyMonboostAtk--;
                      enemyMoncurrentAtk = Math.floor((2 * enemyMonbaseAtk[enemyChoice] + 31) * boostMult[enemyMonboostAtk]) + 5;
                  }
                  console.log(`${defendingMonName}'s Attack fell!`);
                  alert(`${defendingMonName}'s Attack fell!`);
                  divElement.innerHTML += `<br><br>${defendingMonName}'s Attack fell!`
              }
              break;
          case "Close Combat":
              if(moving == "player") {
                  playerMonboostDef--; playerMonboostSpD--;
                  playerMoncurrentDef = Math.floor((2 * playerMonbaseDef[playerChoice] + 31) * boostMult[playerMonboostDef]) + 5;
                  playerMoncurrentSpD = Math.floor((2 * playerMonbaseSpD[playerChoice] + 31) * boostMult[playerMonboostSpD]) + 5;
              }
              if(moving == "enemy") {
                  enemyMonboostDef--; enemyMonboostSpD--;
                  enemyMoncurrentDef = Math.floor((2 * enemyMonbaseDef[enemyChoice] + 31) * boostMult[enemyMonboostDef]) + 5;
                  enemyMoncurrentSpD = Math.floor((2 * enemyMonbaseSpD[enemyChoice] + 31) * boostMult[enemyMonboostSpD]) + 5;
              }
              console.log(`${attackingMonName}'s Def and SpDef fell!`);
              alert(`${attackingMonName}'s Def and SpDef fell!`);
              divElement.innerHTML += `<br><br>${attackingMonName}'s Def and SpDef fell!`
              break;
          case "Draining Kiss":
              attackingMonHP += Math.floor(damage/2);
              console.log(`${attackingMonName} drained ${Math.floor(damage/2)} HP from ${defendingMonName}!`);
              alert(`${attackingMonName} drained ${Math.floor(damage/2)} HP from ${defendingMonName}!`);
              divElement.innerHTML += `<br><br>${attackingMonName} drained ${Math.floor(damage/2)} HP from ${defendingMonName}!`
              break;
          case "Crunch": 
              if(Math.random() * 100 < 20) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerMonboostDef--;
                      playerMoncurrentDef = Math.floor((2 * playerMonbaseDef[enemyChoice] + 31) * boostMult[playerMonboostDef]) + 5;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyMonboostDef--;
                      enemyMoncurrentDef = Math.floor((2 * enemyMonbaseDef[enemyChoice] + 31) * boostMult[enemyMonboostDef]) + 5;
                  }
                  console.log(`${defendingMonName}'s Defense fell!`);
                  alert(`${defendingMonName}'s Defense fell!`);
                  divElement.innerHTML += `<br><br>${defendingMonName}'s Defense fell!`
              }
              break;
          case "Iron Head": case "Zen Headbutt":
              if(Math.random() * 100 < 30 && !moved) {
                  flinched = true;
                  console.log(`${defendingMonName} flinched!`);
                  alert(`${defendingMonName} flinched!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} flinched!`
              } else { flinched = false; }
              break;
          case "Sludge Bomb":
              if(Math.random() * 100 < 30 && defendingMonPrimaryType != type[11] && defendingMonSecondaryType != type[11] && defendingMonPrimaryType != type[16] && defendingMonSecondaryType != type[16]) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerPoisoned = true;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyPoisoned = true;
                  }
                  console.log(`${defendingMonName} was poisoned!`);
                  alert(`${defendingMonName} was poisoned!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} was poisoned!`
              }
              break;
          case "Thunderbolt":
              if(Math.random() * 100 < 10 && defendingMonPrimaryType != type[4] && defendingMonSecondaryType != type[4] && defendingMonPrimaryType != type[7] && defendingMonSecondaryType != type[7]) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerParad = true;
                      playerParaMult = 0.5;
                      playerMoncurrentSpe = (Math.floor((2 * playerMonbaseSpe[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpe] * playerParaMult;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyParad = true;
                      enemyParaMult = 0.5;
                      enemyMoncurrentSpe = (Math.floor((2 * enemyMonbaseSpe[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpe] * enemyParaMult;
                  }
                  console.log(`${defendingMonName} was paralyzed!`);
                  alert(`${defendingMonName} was paralyzed!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} was paralyzed!`
              }
              break;
          case "Flamethrower":
              if(Math.random() * 100 < 10 && defendingMonPrimaryType != type[2] && defendingMonSecondaryType != type[2]) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerBurned = true;
                      playerBurnMult = 0.5;
                      playerMoncurrentAtk = (Math.floor((2 * playerMonbaseAtk[playerChoice] + 31)) + 5) * boostMult[playerMonboostAtk] * playerBurnMult;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyBurned = true;
                      enemyBurnMult = 0.5;
                      enemyMoncurrentAtk = (Math.floor((2 * enemyMonbaseAtk[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostAtk] * enemyBurnMult;
                  }
                  console.log(`${defendingMonName} was burned!`);
                  alert(`${defendingMonName} was burned!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} was burned!`
              }
              break;
          case "Ice Beam":
              if(Math.random() * 100 < 10 && defendingMonPrimaryType != type[13] && defendingMonSecondaryType != type[13]) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerFrozen = true;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyFrozen = true;
                  }
                  console.log(`${defendingMonName} was frozen!`);
                  alert(`${defendingMonName} was frozen!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} was frozen!`
              }
              break;
          case "Sacred Fire":
              if(Math.random() * 100 < 50 && defendingMonPrimaryType != type[2] && defendingMonSecondaryType != type[2]) {
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      playerBurned = true;
                      playerBurnMult = 0.5;
                      playerMoncurrentAtk = (Math.floor((2 * playerMonbaseAtk[playerChoice] + 31)) + 5) * boostMult[playerMonboostAtk] * playerBurnMult;
                  }
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      enemyBurned = true;
                      enemyBurnMult = 0.5;
                      enemyMoncurrentAtk = (Math.floor((2 * enemyMonbaseAtk[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostAtk] * enemyBurnMult;
                  }
                  console.log(`${defendingMonName} was burned!`);
                  alert(`${defendingMonName} was burned!`);
                  divElement.innerHTML += `<br><br>${defendingMonName} was burned!`
              }
              break;
          case "Brave Bird": case "Double-Edge": case "Wild Charge": case "Flare Blitz":
              attackingMonHP -= Math.floor(damage/2);
              console.log(`${attackingMonName} lost ${Math.floor(damage/2)} HP (${Math.round(1000 * damage/2/defendingMonMaxHP) / 10}%) from recoil!`);
              alert(`${attackingMonName} lost ${Math.floor(damage/2)} HP (${Math.round(1000 * damage/2/defendingMonMaxHP) / 10}%) from recoil!`);
              divElement.innerHTML += `<br><br>${attackingMonName} lost ${Math.floor(damage/2)} HP (${Math.round(1000 * damage/2/defendingMonMaxHP) / 10}%) from recoil!`
              break;
          case "Ancient Power":
              if(Math.random() * 100 < 10) {
                  if(defendingMonName == monName[enemyChoice] && moveName == playerMovePicked) {
                      playerMonboostAtk++; playerMonboostDef++; playerMonboostSpA++; playerMonboostSpD++; playerMonboostSpe++;
                      playerMoncurrentAtk = (Math.floor((2 * playerMonbaseAtk[playerChoice] + 31)) + 5) * boostMult[playerMonboostAtk] * playerBurnMult;
                      playerMoncurrentDef = (Math.floor((2 * playerMonbaseDef[playerChoice] + 31)) + 5) * boostMult[playerMonboostDef];
                      playerMoncurrentSpA = (Math.floor((2 * playerMonbaseSpA[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpA];
                      playerMoncurrentSpD = (Math.floor((2 * playerMonbaseSpD[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpD];
                      playerMoncurrentSpe = (Math.floor((2 * playerMonbaseSpe[playerChoice] + 31)) + 5) * boostMult[playerMonboostSpe] * playerParaMult;
                  }
                  if(defendingMonName == monName[playerChoice] && moveName == enemyMovePicked) {
                      enemyMonboostAtk++; enemyMonboostDef++; enemyMonboostSpA++; enemyMonboostSpD++; enemyMonboostSpe++;
                      enemyMoncurrentDef = Math.floor((2 * enemyMonbaseDef[enemyChoice] + 31) * boostMult[enemyMonboostDef]) + 5;
                      enemyMoncurrentAtk = (Math.floor((2 * enemyMonbaseAtk[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostAtk] * enemyBurnMult;
                      enemyMoncurrentDef = (Math.floor((2 * enemyMonbaseDef[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostDef];
                      enemyMoncurrentSpA = (Math.floor((2 * enemyMonbaseSpA[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpA];
                      enemyMoncurrentSpD = (Math.floor((2 * enemyMonbaseSpD[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpD];
                      enemyMoncurrentSpe = (Math.floor((2 * enemyMonbaseSpe[enemyChoice] + 31)) + 5) * boostMult[enemyMonboostSpe] * enemyParaMult;
                  }
                  console.log(`${attackingMonName}'s stats rose!`);
                  alert(`${attackingMonName}'s stats rose!`);
                  divElement.innerHTML += `<br><br>${attackingMonName}'s stats rose!`
              }
              break;
        }
    }
    } else if(attackerMoving) {
        console.log(`${moveName} missed!`)
        alert(`${moveName} missed!`)
        divElement.innerHTML += `<br><br>${defendingMonName} missed!`
    } else if(attackerParad) {
        console.log(`${attackingMonName} was fully paralyzed! It can't move!`);
        alert(`${attackingMonName} was fully paralyzed! It can't move!`);
        divElement.innerHTML += `<br><br>${defendingMonName} was fully paralyzed! It can't move!`
    } else if(attackerFrozen) {
        console.log(`${attackingMonName} is frozen solid! It can't move!`);
        alert(`${attackingMonName} is frozen solid! It can't move!`);
        divElement.innerHTML += `<br><br>${defendingMonName} is frozen solid! It can't move!`
    }

    if(moving == "player") { enemyMoncurrentHP = defendingMonHP; playerMoncurrentHP = attackingMonHP; }
    else if(moving == "enemy") { playerMoncurrentHP = defendingMonHP; enemyMoncurrentHP = attackingMonHP; }

    if(playerMoncurrentHP < 0) {
        defendingMonHP = 0;
        playerMoncurrentHP = 0;
    }
    if(enemyMoncurrentHP < 0) {
        defendingMonHP = 0;
        enemyMoncurrentHP = 0;
    }
    if(playerMoncurrentHP > playerMonmaxHP) {
        playerMoncurrentHP = playerMonmaxHP;
    }
    if(enemyMoncurrentHP > enemyMonmaxHP) {
        enemyMoncurrentHP = enemyMonmaxHP;
    }
            
}

function checkStatused() {
    if(playerBurned && playerMoncurrentHP > 0 && enemyMoncurrentHP > 0) {
        playerMoncurrentHP -= Math.floor(playerMonmaxHP * 6 / 100);
        console.log(`Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 6 / 100)} HP (6%) from its burn!`);
        alert(`Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 6 / 100)} HP (6%) from its burn!`);
        divElement.innerHTML += `<br><br>Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 6 / 100)} HP (6%) from its burn!`
    }
    if(enemyBurned && enemyMoncurrentHP > 0 && playerMoncurrentHP > 0) {
        enemyMoncurrentHP -= Math.floor(enemyMonmaxHP * 6 / 100);
        console.log(`The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 6 / 100)} HP (6%) from its burn!`);
        alert(`The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 6 / 100)} HP (6%) from its burn!`);
        divElement.innerHTML += `<br><br>The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 6 / 100)} HP (6%) from its burn!`
    }
    if(playerPoisoned && playerMoncurrentHP > 0 && enemyMoncurrentHP > 0) {
        playerMoncurrentHP -= Math.floor(playerMonmaxHP * 12 / 100);
        console.log(`Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`);
        alert(`Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`);
        divElement.innerHTML += `<br><br>Your ${monName[playerChoice]} lost ${Math.floor(playerMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`
    }
    if(enemyPoisoned && enemyMoncurrentHP > 0 && playerMoncurrentHP > 0) {
        enemyMoncurrentHP -= Math.floor(enemyMonmaxHP * 12 / 100);
        console.log(`The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`);
        alert(`The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`);
        divElement.innerHTML += `<br><br>The opposing ${monName[enemyChoice]} lost ${Math.floor(enemyMonmaxHP * 12 / 100)} HP (12%) from its poisoning!`
    }
}

function moveCalc(moving) {
    currentStatCalc();
    calcMoveEffective(moving);
    damageCalc(moving);
}

function turn() {
    turnCounter++;
    movePick();
    checkStatused();
    if(playerMoncurrentHP > 0 && enemyMoncurrentHP > 0) {
        console.log(`Your ${monName[playerChoice]} has ${playerMoncurrentHP} HP (${Math.round(1000 * playerMoncurrentHP/playerMonmaxHP) / 10}%) left. The opposing ${monName[enemyChoice]} has ${enemyMoncurrentHP} HP (${Math.round(1000 * enemyMoncurrentHP/enemyMonmaxHP) / 10}%) left.`);
        alert(`Your ${monName[playerChoice]} has ${playerMoncurrentHP} HP (${Math.round(1000 * playerMoncurrentHP/playerMonmaxHP) / 10}%) left. The opposing ${monName[enemyChoice]} has ${enemyMoncurrentHP} HP (${Math.round(1000 * enemyMoncurrentHP/enemyMonmaxHP) / 10}%) left.`);
        divElement.innerHTML += `<br><br>Your ${monName[playerChoice]} has ${playerMoncurrentHP} HP (${Math.round(1000 * playerMoncurrentHP/playerMonmaxHP) / 10}%) left. The opposing ${monName[enemyChoice]} has ${enemyMoncurrentHP} HP (${Math.round(1000 * enemyMoncurrentHP/enemyMonmaxHP) / 10}%) left.`
        turn();
    } else {
        gameOver();
    }
}

function gameOver() {
    if(playerMoncurrentHP > 0 && enemyMoncurrentHP <= 0) {
        console.log(`Game end. Your ${monName[playerChoice]} won! The opposing ${monName[enemyChoice]} fainted!`);
        alert(`Game end. Your ${monName[playerChoice]} won! The opposing ${monName[enemyChoice]} fainted!`);
        divElement.innerHTML += `<br><br>Game end. Your ${monName[playerChoice]} won! The opposing ${monName[enemyChoice]} fainted!`
    } else if(playerMoncurrentHP <= 0 && enemyMoncurrentHP > 0) {
        console.log(`Game end. The opposing ${monName[enemyChoice]} won! Your ${monName[playerChoice]} fainted!`);
        alert(`Game end. The opposing ${monName[enemyChoice]} won! Your ${monName[playerChoice]} fainted!`);
        divElement.innerHTML += `<br><br>Game end. The opposing ${monName[enemyChoice]} won! Your ${monName[playerChoice]} fainted!`
    } else {
        console.log(`Game end. Nobody won! Both Pokemon fainted!`);
        alert(`Game end. Nobody won! Both Pokemon fainted!`);
        divElement.innerHTML += `<br><br>Game end. Nobody won! Both Pokemon fainted!`
    }
}


monSelection();

const divElement = document.getElementById(`startingText`);
alert(`You have chosen ${monName[playerChoice]}. An opposing ${monName[enemyChoice]} appeared!`);
divElement.innerHTML = `<br>Log:<br><br><br>You selected ${monName[playerChoice]}. An opposing ${monName[enemyChoice]} appeared!`;
statCalc();
turn();
