async function setSrc() {
    const json = await fetch(`https://api.awexxx.xyz/assets/json/storage.json`).then(response => response.json());

    const audio = document.getElementById(`audio`);
    const gif = document.getElementById('gif');
    audio.setAttribute(`src`, `${json.sound}`)
    gif.setAttribute(`src`, `${json.gif}`)
}