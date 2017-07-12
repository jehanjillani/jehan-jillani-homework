$(document).ready(function() {

/*ask John about what .val does?*/
/*what does .val do? it gets the value attribute from a form element*/

  $("form").submit(function(event){

  /*prevents clicking from going to another page*/
  event.preventDefault();

  /*test*/

  var city = $('input:text').val().trim().toLowerCase();

  /*check if working on console log*/
  console.log(city);

  /*if cityType is New York, change background image*/
  if (city === 'NYC' || "New York" || 'NYC' || 'New York City'){
    $('body').css("background-image", "url(.../images/nyc.jpg)");
  }

  else if (city === 'san fransisco' || city === 'sf' || city === 'san fran') {
    $('body').css("background-image", "url(.../images/sf.jpg)");
  }

  else if (city === 'austin' || city === 'AX') {
    $('body').css("background-image", "url(.../images/austin.jpg)");
  }

  else if (city === 'los angeles' || city === 'la' || city === 'LA') {
    $('body').css("background-image", "url(.../images/la.jpg)");
  }
});
}
