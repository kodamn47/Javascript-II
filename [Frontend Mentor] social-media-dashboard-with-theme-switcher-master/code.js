const toggle = document.getElementById("toggle");
const body = document.getElementById("body");
const title = document.getElementById("title");
const total = document.getElementById("total");
const btn = document.getElementById("btn");
const card = document.getElementsByClassName("card");
const username = document.getElementsByClassName("username");
const followers = document.getElementsByClassName("follow");
const foll = document.getElementsByClassName("foll");
const middle = document.getElementById("middle");
const overview = document.getElementsByClassName("overview-card");
const action = document.getElementsByClassName("action");
const count = document.getElementsByClassName("count");

toggle.addEventListener("click", (e) => {
  body.classList.toggle("active");
  title.classList.toggle("active");
  total.classList.toggle("active");
  btn.classList.toggle("active");

  for (i = 0; i < card.length; i++) {
    card[i].classList.toggle("active");
  }

  for (i = 0; i < username.length; i++) {
    username[i].classList.toggle("active");
  }

  for (i = 0; i < followers.length; i++) {
    followers[i].classList.toggle("active");
  }

  for (i = 0; i < foll.length; i++) {
    foll[i].classList.toggle("active");
  }

  middle.classList.toggle("active");

  for (i = 0; i < overview.length; i++) {
    overview[i].classList.toggle("active");
  }

  for (i = 0; i < action.length; i++) {
    action[i].classList.toggle("active");
  }

  for (i = 0; i < count.length; i++) {
    count[i].classList.toggle("active");
  }
});
