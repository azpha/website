async function generateCountdown() {
    var countDownDate = new Date("12/09/2021 09:00 PM").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeuntil").style.display = "none"
        document.getElementById("countdown").innerHTML = `Juice WRLD Day is on!<br>Watch it live on <a href="https://twitch.tv/amazonmusic" target="_blank">Amazon Music's</a> Twitch page.<br><br>
        <iframe src="https://player.twitch.tv/?channel=amazonmusic&parent=awexxx.xyz"height="50%"width="50%"allowfullscreen="true"></iframe>`;
    }
    }, 1000);
}