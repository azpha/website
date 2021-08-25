async function recievedAlert(follower) {
    var audio = document.getElementById('audio');

    // Play the Medal intro audio & gif
    setTimeout(function() {
        var gif = document.getElementById(`gif`)
        var img = document.getElementById(`img`)
        img.style.display = `block`;
        gif.setAttribute(`width`, `350`)
        gif.setAttribute(`src`, `assets/img/medal-gif.gif`)
        var text = document.getElementById(`text`);
        text.innerText = `CloakyBrokey was followed by ${follower} on Medal.tv!`
        audio.play();
    }, 1000);

    setTimeout(function() {
        document.getElementById(`img`).innerHTML = ``;
    }, 15000)

}