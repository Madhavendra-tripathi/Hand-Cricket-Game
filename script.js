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

let unumr=document.getElementById("unumr")
let cnumr=document.getElementById("cnumr")
let unumo=document.getElementById("unumo")
let cnumo=document.getElementById("cnumo")

let pmp = document.getElementById("pmp");
let close = document.getElementById("close");
let stbtn = document.getElementById("stbtn");
let rtbtn = document.getElementById("rtbtn");
let strtbtn = document.getElementById("strtbtn");
let popupmssg = document.getElementById("popupmssg");
let ppbox = document.getElementById("ppbox");
let mssg1 = document.getElementById("mssg1");
let mssg2 = document.getElementById("mssg2");
let full = document.getElementById("full");
let bat = document.getElementById("bat");
let ball = document.getElementById("ball");
let toss = document.getElementById("toss");
let winner = document.getElementById("winner");
let tBat = false;
let tBall = false;
let batting = false;
let balling = false;
let chase = 0;
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

function stats() {
  if (tBat === true && tBall === false) {
    UserBat();
  } else if (tBat === false && tBall === true) {
    UserBall();
  } else {
    console.log("Both balling and batting done");
  }
}

function UserBat() {
  //Computer Balling
  if (batting === false) {
    if (attempt > pmp.value * 6) {
      console.log("User Batting done");
      // run = parseInt(ubtn.innerText) + run;
      // Uruncount.innerText = `your run total is ${run} `;
      // unumr.innerText=`${run}*(${attempt})`;
      batting = true;
      tBat = false;
      tBall = true;
      attempt = 1;
      stats();
    } else if (attempt <= pmp.value * 6) {
      if (
        attempt > 0 &&
        batting === false &&
        balling === false &&
        ubtn.innerText === cbtn.innerText
      ) {
        // attemptC.innerText = `U Ball count is ${attempt}`;
        // Uruncount.innerText = `Your run is ${run} and you are out`;
        unumr.innerText=`${run}(${attempt})`;
        unumo.innerText="OUT";
        unumo.style.color="red";
        batting = true;
        tBat = false;
        tBall = true;
        attempt = 0;
        return;
      } else if (balling === true && ubtn.innerText === cbtn.innerText) {
        // attemptC.innerText = `U Ball count is ${attempt}`;
        // Uruncount.innerText = `Your run is ${run} and you are out`;
        unumr.innerText=`${run}(${attempt})`;
        unumo.innerText="OUT";
        unumo.style.color="red";
        if (crun > run) {
          winner.innerText = "Oops You loose the match";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        } else if (run === crun) {
          //getting out when both are on equal run
          winner.innerText = "Match DRAWN";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        } else {
          winner.innerText = "No result";
        }
        return;
      }
      run = parseInt(ubtn.innerText) + run;
      unumr.innerText=`${run}*(${attempt})`;
      // attemptC.innerText = `U Ball count is ${attempt}`;
      // Uruncount.innerText = `Your run is ${run} `;

      if (balling === true && run > crun) {
        winner.innerText = `You WON the match`;
        strtbtn.style.display = "flex";
        stbtn.value = "New Game";
      }

      //Code for last ball: Draw last ball pe hota hai
      if (
        balling === true &&
        attempt === pmp.value * 6
      ) {
        if(crun==run){
          winner.innerText = "Match DRAWN";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        }
        else if(crun>run){
          winner.innerText = "Computer WON the match";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        }
      }

    } else {
      // attemptC.innerText = `U Ball count is ${attempt}`;
      console.log("Something might be wrong in UserBat function");
    }
  }
}

function UserBall() {
  //Computer Batting
  if (balling === false) {
    if (attempt > pmp.value * 6) {
      console.log("User Balling done");
      // crun = parseInt(cbtn.innerText) + crun;
      // Cruncount.innerText = `comp run total is ${crun} `;
      // cnumr.innerText=`${crun}*(${attempt})`;
      balling = true;
      tBat = true;
      tBall = false;
      attempt = 1;
      stats();
    } else if (attempt <= pmp.value * 6) {
      if (
        attempt > 0 &&
        batting === false &&
        balling === false &&
        ubtn.innerText === cbtn.innerText
      ) {
        // attemptC.innerText = `Comp Ball count is ${attempt}`;
        // Cruncount.innerText = `Comp run is ${crun} and comp out`;
        cnumr.innerText=`${crun}(${attempt})`;
        cnumo.innerText="OUT";
        cnumo.style.color="red";
        balling = true;
        tBat = true;
        tBall = false;
        attempt = 0;
        return;
      } else if (batting === true && ubtn.innerText === cbtn.innerText) {
        // attemptC.innerText = `Comp Ball count is ${attempt}`;
        // Cruncount.innerText = `Comp run is ${crun} and comp out`;
        cnumr.innerText=`${crun}*(${attempt})`;
        cnumo.innerText="OUT";
        cnumo.style.color="red";
        if (run > crun) {
          winner.innerText = "You WON the match";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        } else if (run === crun) {
          //getting out when both are on equal run
          winner.innerText = "Match DRAWN";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        } else {
          winner.innerText = "No result";
        }
        return;
      }

      crun = parseInt(cbtn.innerText) + crun;
      cnumr.innerText=`${crun}*(${attempt})`;
      // attemptC.innerText = `Comp Ball count is ${attempt}`;
      // Cruncount.innerText = `comp run is ${crun} `;

      if (batting === true && crun > run) {
        winner.innerText = "Oops You loose the match";
        strtbtn.style.display = "flex";
        stbtn.value = "New Game";
      }
      stbtn.value = "New Game";

      //Code for last ball: Draw last ball pe hota hai
      if (
        batting === true &&
        attempt === pmp.value * 6
      ) {
        if(crun==run){
          winner.innerText = "Match DRAWN";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        }
        else if(run>crun){
          winner.innerText = "You WON the match";
          strtbtn.style.display = "flex";
          stbtn.value = "New Game";
        }
      }
    } else {
            console.log("Something might be wrong in UserBall function");
    }
  }
}

stbtn.addEventListener("click", () => {
  popupmssg.style.display = "flex";
  ppbox.style.display = "flex";
  strtbtn.style.display = "none";
  full.style.display = "none";
  tBall = false;
  tBat = false;
  bat.style.border = "8px double white";
  ball.style.border = "8px double white";
  mssg1.innerText=""
  mssg2.innerText=""
});
window.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "r" || key == "R") {
    popupmssg.style.display = "flex";
    ppbox.style.display = "flex";
    strtbtn.style.display = "none";
    full.style.display = "none";
    attempt = 0;
    run = 0;
    crun = 0;
    tBall = false;
    tBat = false;
    bat.style.border = "8px double white";
    ball.style.border = "8px double white";
    mssg1.innerText=""
  mssg2.innerText=""
  }
});
rtbtn.addEventListener("click", () => {
  popupmssg.style.display = "flex";
  ppbox.style.display = "flex";
  strtbtn.style.display = "none";
  attempt = 0;
  full.style.display = "none";
  tBall = false;
  tBat = false;
  bat.style.border = "8px double white";
  ball.style.border = "8px double white";
  mssg1.innerText=""
  mssg2.innerText=""
});

close.addEventListener("click", (e) => {
  if (pmp.value === "") {
    e.preventDefault();
    mssg1.innerText = "Select atleast 1 over to continue";
  }
  else if(pmp.value>50 ||pmp.value===50){
    e.preventDefault();
    mssg1.innerText = "Select 50 or less than 50 overs to continue";
  }
   else if (tBall === false && tBat === false) {
    e.preventDefault();
    mssg2.innerText = "Please select at least 1 option (bat or ball)";
  } else {
    popupmssg.style.display = "none";
    ppbox.style.display = "none";
    full.style.display = "block";
    batting = false;
    balling = false;
    attempt = 0;
    run = 0;
    crun = 0;
    chase = 0;
    ubtn.innerText="0"
    cbtn.innerText="0"
    // Uruncount.innerText = `your run is ${run} `;
    // Cruncount.innerText = `comp run is ${crun} `;
    // attemptC.innerText = "Ball count is 0";
    unumr.innerText="0(0)"
    cnumr.innerText="0(0)"
    unumo.innerText="NOT OUT"
    cnumo.innerText="NOT OUT"
    unumo.style.color="lime"
    cnumo.style.color="lime"
    winner.innerText = "Result";
  }
});

bat.addEventListener("click", () => {
  bat.style.border = "8px solid white";
  ball.style.border = "8px double white";
  toss.innerText = `Toss: You choose to bat(${pmp.value} overs)`;
  tBall = false;
  tBat = true;
});

window.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "b" || key == "B") {
    if (full.style.display === "none") {
      bat.style.border = "8px solid white";
      ball.style.border = "8px double white";
      toss.innerText = `Toss: You choose to bat(${pmp.value} overs)`;
      tBall = false;
      tBat = true;
    }
  }
});

ball.addEventListener("click", () => {
  ball.style.border = "8px solid white";
  bat.style.border = "8px double white";
  toss.innerText = `Toss: You choose to ball(${pmp.value} overs)`;
  tBall = true;
  tBat = false;
});

window.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "g" || key === "G") {
    if (full.style.display === "none") {
      ball.style.border = "8px solid white";
      bat.style.border = "8px double white";
      toss.innerText = `Toss: You choose to ball(${pmp.value} overs)`;
      tBall = true;
      tBat = false;
    }
  }
});

window.addEventListener("blur", () => {
  document.title = "Play Here☹️";
});
window.addEventListener("focus", () => {
  document.title = "Hand Cricket";
});