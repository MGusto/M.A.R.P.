function nameGenView() {
    return /*HTML*/ `<div class="contentBox" id="namegenView">
    <p>Name & Faction Generator feature is WIP. Most of the names are sourced from Grulag's <a class="hyperlink" href="https://www.moddb.com/mods/stalker-anomaly/addons/anomalys-name-update-for-stalkers-anus" target="_blank">"Anomaly's Name Update for Stalkers"<a>.</p>
    ${model.inputs.hasUserPickedFaction ? '' : `<h4>Choose the faction you want to play!</h4>`}
    <div id="generatorBox">
    <div id="factionbox">
    <div class="flexcolumn">
    <div class ="factionchoice"><img class="choiceImg" id="lonerimg" src="./img/Loner.png" width="100px" height="100px" onclick="selectFaction(0, this.id)"><div class="imgDesc">LONERS</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="dutyimg" src="./img/Duty.png" width="100px" height="100px" onclick="selectFaction(3, this.id)"><div class="imgDesc">DUTY</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="armyimg" src="./img/Army.png" width="100px" height="100px" onclick="selectFaction(6, this.id)"><div class="imgDesc">MILITARY</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="renegadeimg" src="./img/Renegade.png" width="90px" height="90px" onclick="selectFaction(9, this.id)"><div class="imgDesc">RENEGADE</div></div>
    </div><div class="flexcolumn">
    <div class ="factionchoice"><img class="choiceImg" id="banditimg" src="./img/Bandits.png" width="100px" height="120px" onclick="selectFaction(1, this.id)"><div class="imgDesc">BANDITS</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="freedomimg" src="./img/Freedom.png" width="100px" height="100px" onclick="selectFaction(4, this.id)"><div class="imgDesc">FREEDOM</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="monolithimg" src="./img/Monolith.png" width="100px" height="100px" onclick="selectFaction(7, this.id)"><div class="imgDesc">MONOLITH</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="sinimg" src="./img/SIN.png" width="85px" height="85px" onclick="selectFaction(10, this.id)"><div class="imgDesc">SIN</div></div>
    </div><div class="flexcolumn">
    <div class ="factionchoice"><img class="choiceImg" id="csimg"src="./img/ClearSky.png" width="100px" height="120px" onclick="selectFaction(2, this.id)"><div class="imgDesc">CLEAR SKY</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="mercimg" src="./img/Mercenary.png" width="100px" height="100px" onclick="selectFaction(5, this.id)"><div class="imgDesc">MERCENARY</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="ecoimg" src="./img/Ecologists.png" width="100px" height="100px" onclick="selectFaction(8, this.id)"><div class="imgDesc">ECOLOGISTS</div></div>
    <div class ="factionchoice"><img class="choiceImg" id="unisgimg" src="./img/UNISG.png" width="100px" height="100px" onclick="selectFaction(11, this.id)"><div class="imgDesc">UNISG</div></div>
    </div>
    </div>
    ${model.inputs.hasUserPickedFaction ? `${model.inputs.factionData}` : ''}</div>${model.inputs.hasUserPickedFaction ? /*HTML*/ `<div id="genderChoice" class="contentBox">
        <div class="generalBtn" onclick="chooseGender(0)">Masculine</div>
        <div class="generalBtn" onclick="chooseGender(1)">Feminine</div>
        </div>` : ''}</div>
    ${model.inputs.hasUserPickedGender ? /*HTML*/ `<div id="generateNamesBox" class="contentBox">
    <div class="largeBtn" onclick="generateNames()">Generate Names</div>
    </div>` : ''}
    `
}

function checkFaction(faction) {
    hoveredfaction = '';
    hoveredfaction = faction;
    console.log(hoveredfaction)
    updateView();
}

function selectFaction(entry, ident) {
    const fact = model.data.factions;
    const input = model.inputs;
    const enemies = model.data.factions[entry].enemies;
    input.pickedFaction = '';
    fact[entry].chosen = true;
    input.pickedFaction = entry;
    input.pickedImgId = ident;
    let tempEnemyList = '';
    let tempEnemyNum = 0;
    for (let i = 0; i < enemies.length; i++) {
        tempEnemyNum = enemies[i];
        tempEnemyList += /*HTML*/ `<img class="enemyImg" src="${fact[tempEnemyNum].icon}" ${fact[tempEnemyNum].enicopx} alt="${fact[tempEnemyNum].name}"> `;
    }
    input.hasUserPickedFaction = true;
    input.factionData = '';
    input.factionData = /*HTML*/ `<div class = "selfactionBox"><img class="profileImg" src=${fact[entry].icon}><h4>${fact[entry].name}</h4><br><p4>${fact[entry].description}</p4><br><p4>Location(s): ${fact[entry].locations}</p4><br><br><h4>Enemies:</h4> <div class="enemiesBox">${tempEnemyList}</div></div>`;
    console.log(input.factionData);
    updateView();
}

function chooseGender(gender) {
    const input = model.inputs;
    input.hasUserPickedGender = true;
    updateView();
}