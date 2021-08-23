async function checkForOutage() {
    Global = {}
    Global.error = false
    await fetch(`https://api-splitstat.awexxx.xyz/heartbeat`).then(response => response.json()).catch(err => {
        Global.error = true;
        document.getElementById(`status`).innerText = `offline!`
        document.getElementById(`addon`).innerText = `API returned nothing when sent a heartbeat.`
    })

    if (Global.error === false) {
        document.getElementById(`status`).innerText = `online!`
        document.getElementById(`addon`).innerText = `API responded when sent a heartbeat!`
    }

    console.log(`Checked, checking in 10s`)

    setTimeout(checkForOutage, 10000);
}