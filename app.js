show();
function show() {
    let html = '';
    html = /*HTML*/ `
    <div class="headerBox" id="introhead">
        <h2 id="maintitle">M.A.R.P.</h2>
            <h3 id="subtitle">(Or "MGusto's Anomaly Randomizer Project")</h3>
            </div>
            <div id="navbar"><button id="introbtn" class="navbtn">Intro</button><button id="namegenbtn" class="navbtn">Name & Faction</button><button id="hideoutbtn" class="navbtn">Hideouts</button><button id="aboutbtn" class="navbtn">About</button></div>
            <br>
            <div class="contentBox">
                <p>This is a little project I'm building relating to <a href="https://www.moddb.com/mods/stalker-anomaly" target="_blank">S.T.A.L.K.E.R. Anomaly</a> and the mod-packs that run on top of it. The intent is to make a web-based tool that can be used by players to make certain decisions for them, either for the sake of inspiration or for challenge-runs and that sort of thing.</p>
                </div>`;
    app.innerHTML = html;
}