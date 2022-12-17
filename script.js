var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    index  = 0,
    $top   = $('#top-area');

setInterval(function() {
   $top.animate({ opacity: 0 }, 500, function() {
     $top.css('background-image', 'url('+images[++index]+')');
     $top.animate({ opacity: 1 }, 500, function() {
       if(index === images.length) index = 0;
     });
   });
}, 6000);