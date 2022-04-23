async function getState() {
    const data = await fetch("https://api.thatalex.dev/v0/web/spotify/state", {
        method: "GET"
    }).then(response => response.json())
    .catch(function(response) {
        console.log(`Uh oh, a little fucky wucky owo occurred\n\n${response}`)
        document.getElementById("songContent").innerHTML = `<p style="color:red;">Uh oh! There was an error fetching song content.<br>The API may be temporarily down.</p>`
    });
   
    if(data.playing) document.getElementById("songContent").innerHTML = `<p><strong>${data.data.songData.songName}</strong> by <strong>${data.data.songData.artists[0].name}</strong> at <strong>${data.data.device.volume}%</strong> volume.`
    else document.getElementById("songContent").innerHTML = `<p><strong>${data.data.songData.songName}</strong> by <strong>${data.data.songData.artists[0].name}</strong> is <strong>paused</strong>.`
}