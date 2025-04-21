let selFaction = '';
let selFactionDesc = '';
let selFactionLoc = '';
let hasUserPickedFaction = false;
let factionData = '';
function checkFaction(faction) {
    hoveredfaction = '';
    hoveredfaction = faction;
    console.log(hoveredfaction)
    show();
}

function selectFaction(entry) {
    const fact = namegencont.factions;
    hasUserPickedFaction = true;
    factionData = '';
    selFaction = fact[entry].name;
    selFactionDesc = fact[entry].description;
    selFactionLoc = fact[entry].locations;
    factionData += /*HTML*/ `<h2>Faction: ${selFaction}</h2> <br> <p>Description: ${selFactionDesc}</p> <br> <p>Locations: ${selFactionLoc}</p>`;
    console.log(factionData);
    show();
}

function factionDataShow() {
    return factionData;
}