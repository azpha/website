async function checkForOutage() {
    var data = await fetch(`https://st.awexxx.xyz/heartbeat`)

    console.log(data)

    if (data.response !== 200) {
        document.getElementById(`status`).innerText = `offline!`
        document.getElementById(`addon`).innerText = `API didn't respond!`
    } else if (data.response === 200) {
        document.getElementById(`status`).innerText = `online!`
        document.getElementById(`addon`).innerText = `API responded when sent a heartbeat!`
    }

    console.log(`Checked, checking in 10s`)

    setTimeout(checkForOutage, 10000);
}