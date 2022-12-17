var images = document.querySelectorAll('#slider img');
var current = 0;

function slider() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
  current = (current != images.length - 1) ? current + 1 : 0;
  images[current].style.opacity = 1;
}

setInterval(slider, 3000);
