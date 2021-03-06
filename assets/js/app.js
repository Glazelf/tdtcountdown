// Set the date we're counting down to
var countDownDate = new Date("Mar 9, 2019 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Counting negative days towards TDT
  var daysSince = days - (days * 2);
  var hoursSince = hours - (hours * 2);
  var minutesSince = minutes - (minutes * 2);
  var secondsSince = seconds - (seconds * 2);

  // Writing text depending on the time remaining
  if (distance > 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:12%;margin-top:-8%;color:white;font-size:96px'>It's ${days}d ${hours}h ${minutes}m ${seconds}s to TDT</span>`;
  } else if (distance <= 0 && distance > -172800000) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:36%;margin-top:-8%;color:white;font-size:96px'>TDT Time!</span>`;
  } else if (distance <= -172800000) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-left:10%;margin-top:-8%;color:white;font-size:75px'>It's been ${daysSince}d ${hoursSince}h ${minutesSince}m ${secondsSince}s since TDT!</span>`;
  }
}, 1000);

document.getElementById("credits").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-top:35%;margin-left:89.5%;color:white;font-size:16px'>Made by <a href="https://twitter.com/Glazelfy" target="_blank">Glaze</a> of the</span>`;
document.getElementById("creditsteam").innerHTML = `<span style='font-family:helvetica;float:left;position:relative;margin-top:0%;margin-left:65%;color:white;font-size:16px'>"0-2 Free Soda And Hanging With The Homies All Weekend"- Crew- Team</span>`;