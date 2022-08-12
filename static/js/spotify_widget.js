const socket = io("https://api.thatalex.dev")

// divs used
var div = document.getElementById("container");
var image = div.querySelector("#cover-img");
var text = div.querySelector("#cover-text");
var content = div.querySelector(".cover-text");

console.log("[ws] asked server to initiate connection..")
socket.emit("spotify_status", "listen");
socket.on("api_update", (song_data) => {    
    image.src = song_data.cover
    text.innerHTML = `${song_data.title} - ${song_data.album}<br>${song_data.artist}<br>${song_data.position}/${song_data.duration}`;
});

// on connect + error events
socket.on("connect", () => {
    console.log('[ws] hello dear friend! connected successfully to backend, formatting page')
})

socket.on("error", (e) => {
    console.log(e)
})