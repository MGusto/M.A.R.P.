let currentView = introView();
function updateView() {
    switch (model.app.currentPage) {
        case 0:
            currentView = introView();
            break;
        case 1:
            currentView = nameGenView();
            break;
        case 2:
            currentView = hideoutView();
            break;
        case 3:
            currentView = aboutView();
            break;
    }
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="headerBox" id="introhead">
        <h2 id="maintitle">M.A.R.P.</h2>
            <h3 id="subtitle">(Or "MGusto's Anomaly Randomizer Project")</h3>
            </div>
            <div id="navbar"><button id="introbtn" class="navbtn" onclick="swapView(0)">Intro</button><button id="namegenbtn" class="navbtn" onclick="swapView(1)">Name<br>Generator</button><button id="hideoutbtn" class="navbtn" onclick="swapView(2)">Hideout Picker</button><button id="aboutbtn" class="navbtn" onclick="swapView(3)">About</button></div>
            <br>
            ${currentView}`;
}

function swapView(swap) {
    model.app.currentPage = swap;
    updateView();
}