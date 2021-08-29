var socket = io();
        
socket.on('event', function(msg) {
  var audio = document.getElementById('audio');

  // Play the Medal intro audio & gif
  setTimeout(function() {
      document.getElementById(`container`).style.display = `block`;
      text.innerText = `CloakyBrokey was followed by ${msg} on Medal.tv!`
      console.log(`User that followed:`, msg)
      audio.play();
  }, 1000);

  setTimeout(function() {
      document.getElementById(`container`).style.display = `none`;
      audio.pause();
  }, 9000)
});