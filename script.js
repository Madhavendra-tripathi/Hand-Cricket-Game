// function to be added:
//  1. add features to ask number of overs and implement it,(for it implement buttton start game on the place of 1,2,3 pad)
//  2. And work on users and computers turn

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let user = document.getElementById("user");
let ubtn = document.getElementById("ubtn");
let comp = document.getElementById("comp");
let result = document.getElementById("result");
let Uruncount = document.getElementById("Uruncount");
let Cruncount = document.getElementById("Cruncount");
let attemptC = document.getElementById("attemptC");
let pmp = document.getElementById("pmp");
let close = document.getElementById("close");
let stbtn = document.getElementById("stbtn");
let rtbtn = document.getElementById("rtbtn");
let strtbtn = document.getElementById("strtbtn");
let popupmssg = document.getElementById("popupmssg");
let ppbox = document.getElementById("ppbox");
// let pmp = document.getElementById("pmp");
let mssg1 = document.getElementById("mssg1");
let mssg2 = document.getElementById("mssg2");
let full = document.getElementById("full");
let bat = document.getElementById("bat");
let ball = document.getElementById("ball");
let toss = document.getElementById("toss");
let tBat = false;
let tBall = false;
let batting = false;
let balling = false;
let run = 0;
let crun = 0;
let attempt = 0;

function onef() {
  ubtn.innerHTML = one.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}
function twof() {
  ubtn.innerHTML = two.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}
function threef() {
  ubtn.innerHTML = three.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}
function fourf() {
  ubtn.innerHTML = four.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}
function fivef() {
  ubtn.innerHTML = five.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}
function sixf() {
  ubtn.innerHTML = six.value;
  cbtn.innerHTML = computerVal();
  attempt = attempt + 1;
  stats();
}

function computerVal() {
  let a = Math.floor(Math.random() * 6) + 1;
  return a;
}

function UserBat() {
  if (batting === false) {
    if (attempt > pmp.value * 6) {
      console.log("User Batting done");
      run = parseInt(ubtn.innerText) + run;
      Uruncount.innerText = `your run total is ${run} `;
      batting = true;
      tBat = false;
      tBall = true;
      attempt = 1;
      stats();
    } else if (attempt <= pmp.value * 6) {
      attemptC.innerText = `U Ball count is ${attempt} finish last`;
      run = parseInt(ubtn.innerText) + run;
      Uruncount.innerText = `Your run is ${run} `;
    } else {
      // attemptC.innerText = `U Ball count is ${attempt}`;
      console.log("Something might be wrong in UserBat function");
    }
  }
}
function UserBall() {
  if (balling === false) {
    if (attempt > pmp.value * 6) {
      console.log("User Balling done");
      crun = parseInt(cbtn.innerText) + crun;
      Cruncount.innerText = `comp run total is ${crun} `;
      balling = true;
      tBat = true;
      tBall = false;
      attempt = 1;
      stats();
    } else if (attempt <= pmp.value * 6) {
      attemptC.innerText = `Comp Ball count is ${attempt} finish last`;
      crun = parseInt(cbtn.innerText) + crun;
      Cruncount.innerText = `comp run is ${crun} `;
    } else {
      // attemptC.innerText = `Comp Ball count is ${attempt}`;
      console.log("Something might be wrong in UserBall function");
    }
  }
}

function stats() {
  if (tBat === true && tBall === false) {
    UserBat();
  } else if (tBat === false && tBall === true) {
    UserBall();
  } else {
    console.log("ok");
  }
}

stbtn.addEventListener("click", () => {
  popupmssg.style.display = "flex";
  ppbox.style.display = "flex";
  strtbtn.style.display = "none";
  full.style.display = "none";
});
window.addEventListener("keydown",(e)=>{
  let key = e.key;
if (key == "r" || key == "R") {
  popupmssg.style.display = "flex";
  ppbox.style.display = "flex";
  strtbtn.style.display = "none";
  full.style.display = "none";
  Uruncount.innerText = `your run total is ${run} `;
  Cruncount.innerText = `comp run is ${crun} `;
  attempt = 0;
  run=0;
  crun=0;
}
})
rtbtn.addEventListener("click", () => {
  popupmssg.style.display = "flex";
  ppbox.style.display = "flex";
  strtbtn.style.display = "none";
  full.style.display = "none";
  Uruncount.innerText = `your run total is ${run} `;
  Cruncount.innerText = `comp run is ${crun} `;
  attempt = 0;
  run=0;
  crun=0;
});
close.addEventListener("click", (e) => {
  if (pmp.value === "") {
    e.preventDefault();
    mssg1.innerText = "Select atleast 1 over to continue";
  } else if (tBall === false && tBat === false) {
    e.preventDefault();
    mssg2.innerText = "Please select at least 1 option (bat or ball)";
  } else {
    popupmssg.style.display = "none";
    ppbox.style.display = "none";
    full.style.display = "block";
  }
});

bat.addEventListener("click", () => {
  bat.style.border = "8px solid white";
  ball.style.border = "8px double white";
  toss.innerText = "Toss: You choose to bat";
  attempt = 0;
  tBall = false;
  tBat = true;
});
ball.addEventListener("click", () => {
  ball.style.border = "8px solid white";
  bat.style.border = "8px double white";
  toss.innerText = "Toss: You choose to ball";
  tBall = true;
  tBat = false;
  attempt = 0;
});

window.addEventListener("blur", () => {
  document.title = "Play Here☹️";
});
window.addEventListener("focus", () => {
  document.title = "Hand Cricket";
});
