$(document).ready(function(){

  $('.work-link').click(function(){
    $('.work-details').toggle(450, "linear");
    event.preventDefault();
  });

// /*WANT WORK DETAILS MENU TO STAY ON*/
 if (window.location.href.indexOf("nationalgeographic") > -1) {
  $('.work-details').show("fast");
} else if (window.location.href.indexOf("newyorker") > -1){
  $('.work-details').show("fast");
}


/*WANT ACTIVE LINK TO GO BOLD*/
if (window.location.href.indexOf("about") > -1) {
  console.log('yay we are on the about page')
  $('.about').css('font-weight','700')
} else if (window.location.href.indexOf("nationalgeographic") > -1){
  console.log('yay we are on the ng page')
  $('.work-natgeo').css('font-weight','500')
}
else if (window.location.href.indexOf("newyorker") > -1){
  console.log('yay we are on the tny page')
  $('.work-TNY').css('font-weight','500')
}

})
