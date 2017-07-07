$(document).ready(function(){

// Disable links
  $("#read-link1, #read-link2, #learnmore").click(function(event){
    event.preventDefault();
  });


// Blog 1 Content Slides Down
  $('#readmore-1').click(function() {
    $('#relaxr-para1-more').slideDown('slow');
    $('html, body').animate({
      scrollTop: $('#relaxr-para1-more').offset().top
    }, 1000);
    $('#readmore-1').hide();
    $('#readless-1').show();
  });

// Blog 2 Content Slides Down
  $('#readmore-2').click(function() {
    $('#relaxr-para2-more').slideDown('slow');
    $('html, body').animate({
      scrollTop: $('#relaxr-para2-more').offset().top
    }, 1000);
    $('#readmore-2').hide();
    $('#readless-2').show();
  });

// Blog 1 Content Slides up
  $('#readless-1').click(function() {
    $('#relaxr-para1-more').slideUp('slow');
    $('html, body').animate({
      scrollTop: $('#relaxr-para1-more').offset().top
    }, 1000);
    $('#readless-1').hide();
    $('#readmore-1').show();
  });
// Blog 2 Content Slides Down
  $('#readless-2').click(function() {
    $('#relaxr-para2-more').slideUp('slow');
    $('html, body').animate({
      scrollTop: $('#relaxr-para2-more').offset().top
    }, 1000);
    $('#readless-2').hide();
    $('#readmore-2').show();
  });


// About Slide Down

  $('#learnmore').click(function() {
    $('#about-more').slideDown('slow');
    $('#learnmore').hide();
  });
})
