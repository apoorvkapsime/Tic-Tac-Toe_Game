// Game Variables Here

let lastTime = 0;
let speed = 2;
let ovalArr = [{ x: 1, y: 1 }];
let possibility = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let flag = 0;
let checkArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let valueArr = [
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
  "none",
];
let item0 = document.getElementById("item-0");
let item1 = document.getElementById("item-1");
let item2 = document.getElementById("item-2");
let item3 = document.getElementById("item-3");
let item4 = document.getElementById("item-4");
let item5 = document.getElementById("item-5");
let item6 = document.getElementById("item-6");
let item7 = document.getElementById("item-7");
let item8 = document.getElementById("item-8");
// Main functions here

// function callback(ctime) {
//   window.requestAnimationFrame(callback);
//   if ((ctime - lastTime) / 1000 < 1 / speed) return;
//   else {
//     console.log(ctime);
//     lastTime = ctime;
//     gameEngine();
//   }
// }

function gameEngine() {
  //  Displaying the computer's oval icon need improvement
  // let box = document.getElementsByClassName("box");
  // a = 0;
  // b = 8;
  // let num = a + (b - a) * Math.random();
  // let roll = possibility.splice(num, 1);
  // let randomNumber = roll[0];

  // document.getElementById("item-${randomNumber}").classList.add("oval");

  // Displaying  user's icon
  item0.addEventListener("click", () => {
    if (flag === 0 && checkArr[0] === 0) {
      item0.classList.add("oval");
      flag = 1;
      checkArr[0] = 1;
      valueArr[0] = "oval";
    } else if (flag === 1 && checkArr[0] === 0) {
      item0.classList.add("cross");
      flag = 0;
      checkArr[0] = 1;
      valueArr[0] = "cross";
    }
  });
  item1.addEventListener("click", () => {
    if (flag === 0 && checkArr[1] === 0) {
      item1.classList.add("oval");
      flag = 1;
      checkArr[1] = 1;
      valueArr[1] = "oval";
    } else if (flag === 1 && checkArr[1] === 0) {
      item1.classList.add("cross");
      flag = 0;
      checkArr[1] = 1;
      valueArr[1] = "cross";
    }
  });
  item2.addEventListener("click", () => {
    if (flag === 0 && checkArr[2] === 0) {
      item2.classList.add("oval");
      flag = 1;
      checkArr[2] = 1;
      valueArr[2] = "oval";
    } else if (flag === 1 && checkArr[2] === 0) {
      item2.classList.add("cross");
      flag = 0;
      checkArr[2] = 1;
      valueArr[2] = "cross";
    }
  });
  item3.addEventListener("click", () => {
    if (flag === 0 && checkArr[3] === 0) {
      item3.classList.add("oval");
      flag = 1;
      checkArr[3] = 1;
      valueArr[3] = "oval";
    } else if (flag === 1 && checkArr[3] === 0) {
      item3.classList.add("cross");
      flag = 0;
      checkArr[3] = 1;
      valueArr[3] = "cross";
    }
  });
  item4.addEventListener("click", () => {
    if (flag === 0 && checkArr[4] === 0) {
      item4.classList.add("oval");
      flag = 1;
      checkArr[4] = 1;
      valueArr[4] = "oval";
    } else if (flag === 1 && checkArr[4] === 0) {
      item4.classList.add("cross");
      flag = 0;
      checkArr[4] = 1;
      valueArr[4] = "cross";
    }
  });
  item5.addEventListener("click", () => {
    if (flag === 0 && checkArr[5] === 0) {
      item5.classList.add("oval");
      flag = 1;
      checkArr[5] = 1;
      valueArr[5] = "oval";
    } else if (flag === 1 && checkArr[5] === 0) {
      item5.classList.add("cross");
      flag = 0;
      checkArr[5] = 1;
      valueArr[5] = "cross";
    }
  });
  item6.addEventListener("click", () => {
    if (flag === 0 && checkArr[6] === 0) {
      item6.classList.add("oval");
      flag = 1;
      checkArr[6] = 1;
      valueArr[6] = "oval";
    } else if (flag === 1 && checkArr[6] === 0) {
      item6.classList.add("cross");
      flag = 0;
      checkArr[6] = 1;
      valueArr[6] = "cross";
    }
  });
  item7.addEventListener("click", () => {
    if (flag === 0 && checkArr[7] === 0) {
      item7.classList.add("oval");
      flag = 1;
      checkArr[7] = 1;
      valueArr[7] = "oval";
    } else if (flag === 1 && checkArr[7] === 0) {
      item7.classList.add("cross");
      flag = 0;
      checkArr[7] = 1;
      valueArr[7] = "cross";
    }
  });
  item8.addEventListener("click", () => {
    if (flag === 0 && checkArr[8] === 0) {
      item8.classList.add("oval");
      flag = 1;
      checkArr[8] = 1;
      valueArr[8] = "oval";
    } else if (flag === 1 && checkArr[8] === 0) {
      item8.classList.add("cross");
      flag = 0;
      checkArr[8] = 1;
      valueArr[8] = "cross";
    }
  });

  // Main Game logic starts here
  if (
    valueArr[0] == valueArr[1] &&
    valueArr[1] == valueArr[2] &&
    valueArr[0] !== "none" &&
    valueArr[1] !== "none" &&
    valueArr[2] !== "none"
  ) {
    console.log(`${valueArr[0]} Win`);
    window.alert(`${valueArr[0]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[0] == valueArr[4] &&
    valueArr[4] == valueArr[8] &&
    valueArr[0] !== "none" &&
    valueArr[4] !== "none" &&
    valueArr[8] !== "none"
  ) {
    console.log(`${valueArr[0]} Win`);
    window.alert(`${valueArr[0]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[0] == valueArr[3] &&
    valueArr[3] == valueArr[6] &&
    valueArr[0] !== "none" &&
    valueArr[3] !== "none" &&
    valueArr[6] !== "none"
  ) {
    console.log(`${valueArr[0]} Win`);
    window.alert(`${valueArr[0]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[1] == valueArr[4] &&
    valueArr[4] == valueArr[7] &&
    valueArr[1] !== "none" &&
    valueArr[4] !== "none" &&
    valueArr[7] !== "none"
  ) {
    console.log(`${valueArr[1]} Win`);
    window.alert(`${valueArr[1]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[2] == valueArr[4] &&
    valueArr[4] == valueArr[6] &&
    valueArr[2] !== "none" &&
    valueArr[4] !== "none" &&
    valueArr[6] !== "none"
  ) {
    console.log(`${valueArr[2]} Win`);
    window.alert(`${valueArr[2]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[2] == valueArr[5] &&
    valueArr[5] == valueArr[8] &&
    valueArr[2] !== "none" &&
    valueArr[5] !== "none" &&
    valueArr[8] !== "none"
  ) {
    console.log(`${valueArr[2]} Win`);
    window.alert(`${valueArr[2]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[3] == valueArr[4] &&
    valueArr[4] == valueArr[5] &&
    valueArr[3] !== "none" &&
    valueArr[4] !== "none" &&
    valueArr[5] !== "none"
  ) {
    console.log(`${valueArr[3]} Win`);
    window.alert(`${valueArr[3]} Win`);
    clearInterval(start);
    document.location.reload();
  } else if (
    valueArr[6] == valueArr[7] &&
    valueArr[7] == valueArr[8] &&
    valueArr[6] !== "none" &&
    valueArr[7] !== "none" &&
    valueArr[8] !== "none"
  ) {
    console.log(`${valueArr[6]} Win`);
    window.alert(`${valueArr[6]} Win`);
    clearInterval(start);
    document.location.reload();
  }
}
// gameEngine();
let start = setInterval(() => {
  gameEngine();
}, 1000);

// Main Logic starts here

// window.requestAnimationFrame(callback);
