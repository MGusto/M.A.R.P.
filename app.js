let currentView = 1;
show();
function show() {
    let html = '';
    html = /*HTML*/ `
    <div class="headerBox" id="introhead">
        <h2 id="maintitle">M.A.R.P.</h2>
            <h3 id="subtitle">(Or "MGusto's Anomaly Randomizer Project")</h3>
            </div>
            <div id="navbar"><button id="introbtn" class="navbtn" onclick="swapView(1)">Intro</button><button id="namegenbtn" class="navbtn" onclick="swapView(2)">Name & Faction<br>Generator</button><button id="hideoutbtn" class="navbtn" onclick="swapView(3)">Hideout Picker</button><button id="aboutbtn" class="navbtn" onclick="swapView(4)">About</button></div>
            <br>
            ${currentView}`;
    app.innerHTML = html;
}

function swapView(num) {
    currentView = '';
    const view = model.data.views[num - 1].htmlcont;
    currentView = view;
    show();
}