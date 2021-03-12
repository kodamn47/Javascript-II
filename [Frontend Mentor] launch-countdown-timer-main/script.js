var countdown = new Date("Jul 20, 2021 16:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var time = countdown - now;

  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var days = Math.floor(time / (1000 * 60 * 60 * 24));

  days = days < 10 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}, 1000);
