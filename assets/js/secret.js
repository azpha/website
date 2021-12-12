// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };

  var code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  var pos = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = code[pos];
    if (key == requiredKey) {
      pos++;
      if (pos == code.length) {
        location = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
        pos = 0;
      }
    } else {
      pos = 0;
    }
  });