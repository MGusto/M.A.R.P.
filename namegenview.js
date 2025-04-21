function nameGenView() {
    return /*HTML*/ `<div class="contentBox">
    <p>Name & Faction Generator feature is WIP. Most of the names are sourced from Grulag's <a class="hyperlink" href="https://www.moddb.com/mods/stalker-anomaly/addons/anomalys-name-update-for-stalkers-anus" target="_blank">"Anomaly's Name Update for Stalkers"<a>.</p>
    <div id="generatorBox">
    <h3>Choose the faction you want to play!</h3>
    <div id="namefaction"></div>
    <div id="factionbox">
    <div class ="factionchoice"><img class="choiceImg" src="./img/Loner.png" onclick="selectFaction(0)"><div class="imgDesc">LONERS</div></div>
    <div class ="factionchoice"><img class="choiceImg" src="./img/Bandits.png" onclick="selectFaction(1)"><div class="imgDesc">BANDITS</div></div>
    </div>
    <div id="genderChoice">
    <div class="generalBtn" onclick="chooseGender(0)">Masculine</div>
    <div class="generalBtn" onclick="chooseGender(1)">Feminine</div>
    </div>
    </div>
    ${model.inputs.hasUserPickedFaction ? `${model.inputs.factionData}` : ''}`;
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
    input.hasUserPickedFaction = true;
    input.factionData = '';
    input.factionData = /*HTML*/ `<div class = "selfactionBox"><img class="profileImg" src=${fact[entry].icon}><h4>${fact[entry].name}</h4><br><p4>${fact[entry].description}</p4><br><br><p5>Location(s): ${fact[entry].locations}</p5></div>`;
    console.log(input.factionData);
    updateView();
}