function nameGenView() {
    return /*HTML*/ `<div class="contentBox" id="namegenView">
    <p>Name & Faction Generator feature is WIP. Most of the names are sourced from Grulag's <a class="hyperlink" href="https://www.moddb.com/mods/stalker-anomaly/addons/anomalys-name-update-for-stalkers-anus" target="_blank">"Anomaly's Name Update for Stalkers"<a>.</p>
    <h3>Choose the faction you want to play!</h3>
    <div id="generatorBox">
    <div id="factionbox">
    <div class ="factionchoice"><img class="choiceImg" src="./img/Loner.png" width="100px" height="100px" onclick="selectFaction(0)"><div class="imgDesc">LONERS</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Bandits.png" width="100px" height="120px" onclick="selectFaction(1)"><div class="imgDesc">BANDITS</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/ClearSky.png" width="100px" height="120px" onclick="selectFaction(2)"><div class="imgDesc">CLEAR SKY</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Duty.png" width="100px" height="100px" onclick="selectFaction(3)"><div class="imgDesc">DUTY</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Freedom.png" width="100px" height="100px" onclick="selectFaction(4)"><div class="imgDesc">FREEDOM</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Mercenary.png" width="100px" height="100px" onclick="selectFaction(5)"><div class="imgDesc">MERCENARY</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Army.png" width="100px" height="100px" onclick="selectFaction(6)"><div class="imgDesc">MILITARY</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Monolith.png" width="100px" height="100px" onclick="selectFaction(7)"><div class="imgDesc">MONOLITH</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Ecologists.png" width="100px" height="100px" onclick="selectFaction(8)"><div class="imgDesc">ECOLOGISTS</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Renegade.png" width="90px" height="90px" onclick="selectFaction(9)"><div class="imgDesc">RENEGADE</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/SIN.png" width="85px" height="85px" onclick="selectFaction(10)"><div class="imgDesc">SIN</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/UNISG.png" width="100px" height="100px" onclick="selectFaction(11)"><div class="imgDesc">UNISG</div></div>
    </div>
    ${model.inputs.hasUserPickedFaction ? `${model.inputs.factionData}` : ''}</div></div>
    ${model.inputs.hasUserPickedFaction ? `<div id="genderChoice" class="contentBox">
    <div class="generalBtn" onclick="chooseGender(0)">Masculine</div>
    <div class="generalBtn" onclick="chooseGender(1)">Feminine</div>
    </div>` : ''}
    `
    }

function checkFaction(faction) {
    hoveredfaction = '';
    hoveredfaction = faction;
    console.log(hoveredfaction)
    updateView();
}

function selectFaction(entry) {
    const fact = model.data.factions;
    const input = model.inputs;
    const enemies = model.data.factions[entry].enemies;
    input.pickedFaction = '';
    input.pickedFaction = entry;
    let tempEnemyList = '';
    let tempEnemyNum = 0;
    for(let i = 0; i < enemies.length; i++) {
        tempEnemyNum = enemies[i];
        tempEnemyList += /*HTML*/ `<img class="enemyImg" src="${fact[tempEnemyNum].icon}" ${fact[tempEnemyNum].enicopx} alt="${fact[tempEnemyNum].name}"> `;
    }
    input.hasUserPickedFaction = true;
    input.factionData = '';
    input.factionData = /*HTML*/ `<div class = "selfactionBox"><img class="profileImg" src=${fact[entry].icon}><h4>${fact[entry].name}</h4><br><p4>${fact[entry].description}</p4><br><br><p4>Location(s): ${fact[entry].locations}</p4><br><br><h4>Enemies:</h4> <div class="enemiesBox">${tempEnemyList}</div></div>`;
    console.log(input.factionData);
    updateView();
}