show();
function show() {
    let html = '';
    html = /*HTML*/ `
    <div class="headerBox" id="introhead">
        <h2 id="maintitle">M.A.R.P.</h2>
            <h3 id="subtitle">(Or "MGusto's Anomaly Randomizer Project")</h3>
            </div>
            <br>
            <div class="contentBox">
                <p>This is a little project I'm building relating to S.T.A.L.K.E.R. Anomaly and the mod-packs that run on top of it. The intent is to make a web-based tool that can be used by players to make certain decisions for them, either for the sake of inspiration or for challenge-runs and that sort of thing.</p>
                </div>`;
    app.innerHTML = html;
}