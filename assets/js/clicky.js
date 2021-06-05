var count = 0;

function clickyBoy() {
  count++;
  if (count == 1){
    alert("You feel the ground shake..")
  } else if (count === 2) {
      alert("You feel your spine tingle..")
  } else if (count === 3) {
      alert("The ground starts to split..")
  } else if (count === 4) {
      alert("It starts to rise up..")
  } else if (count === 5) {
      alert("It's here..")
      window.location.replace('./easter-egg.html');
  }
}