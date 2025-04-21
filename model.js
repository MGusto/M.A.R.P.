const model = {
    app: {
    },
    inputs: {

    },
    data: {
        views: [
            {
                id: 1, name: 'intro', htmlcont: /*HTML*/ `<div class="contentBox">
<p>This is a little project I'm building relating to <a class="hyperlink" href="https://www.moddb.com/mods/stalker-anomaly" target="_blank">S.T.A.L.K.E.R. Anomaly</a> and the mod-packs that run on top of it. The intent is to make a web-based tool that can be used by players to make certain decisions for them, either for the sake of inspiration or for challenge-runs and that sort of thing.</p>
</div>` },
            {
                id: 2, name: 'namegen', htmlcont: /*HTML*/ `<div class="contentBox">
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
<div class="factionInfo">${factionData}
</div>
</div>` },
            {
                id: 3, name: 'hideout', htmlcont: /*HTML*/ `<div class="contentBox">
<p>Hideout Picker feature is WIP.</p>
</div>` },
            {
                id: 4, name: 'about', htmlcont: /*HTML*/ `<div class="contentBox">
    <p>This is a section where I put links and stuff.</p>
    <ul>
    <li><a href="https://github.com/MGusto/M.A.R.P." target="_blank">Project GitHub Repo</a></li>
    <li>HUH?!</li>
    <li><a class="hyperlink" href="https://www.moddb.com/mods/stalker-anomaly" target="_blank">S.T.A.L.K.E.R. Anomaly</a></li>
    <li><a class="hyperlink" href="https://github.com/Grokitach/Stalker_GAMMA" target="_blank">S.T.A.L.K.E.R. GAMMA mod-pack for Anomaly</a></li>
    <li>Original S.T.A.L.K.E.R. Trilogy <a class="hyperlink" href="https://store.steampowered.com/sub/35983/" target="_blank">on Steam</a> and <a class="hyperlink" href="www.gog.com/en/games?query=S.T.A.L.K.E.R." target="_blank">on GOG</a></li>
</ul>
    </div>`},
        ],
    }
}