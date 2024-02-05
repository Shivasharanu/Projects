// JavaScript to populate the grid with items
const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 7; j++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.id = "cell" + i.toString() + j.toString();
    gridContainer.appendChild(gridItem);
  }
}

const player1 = prompt("player One : Enter your Name, you will be blue");
const player2 = prompt("player two : Enter your name, you will be red.");
let user = 0;

// for (let k = 0; k < 48; k++) {
//   if (k % 2 == 0) {
//     user = 1;
//     $("p").text(
//       player1 + " it is your turn, please pick a column to drop your blue chip"
//     );
//   } else {
//     user = 2;
//     $("p").text(
//       player2 + " it is your turn, please pick a column to drop your red chip"
//     );
//   }
$("p").text(
  player1 + " it is your turn, please pick a column to drop your blue chip"
);
// let player = "player1";
$(".grid-item").on("click", function () {
  let x = 0;
  let player = $("p").attr("id");
  let elementId = $(this).attr("id");
  let column = elementId[5];
  let circle = "";
  console.log(player);
  for (let i = 6; i >= 0; i--) {
    circle = "#cell" + i.toString() + column;
    currentColor = $(circle).css("background-color");
    if (
      currentColor.replace(/\s/g, "") !== "rgb(0,0,255)" &&
      currentColor.replace(/\s/g, "") !== "rgb(255,0,0)"
    ) {
      if (player[6] === "1") {
        $(circle).css("background-color", "blue");
        $("#" + player).attr("id", "player2");
        $("p").text(
          player2 +
            " it is your turn, please pick a column to drop your red chip"
        );
        break;
      } else if (player[6] === "2") {
        $(circle).css("background-color", "red");
        $("#" + player).attr("id", "player1");
        $("p").text(
          player1 +
            " it is your turn, please pick a column to drop your blue chip"
        );
        break;
      }
    }
  }

  x = check4Adjacent(player);
  if (x) {
    let p = $("p").attr("id");
    $("#" + p).attr("id", "player3");
  }
});

function check4Adjacent(player) {
  const rows = 7;
  const cols = 7;
  let circle1 = "",
    circle2 = "",
    circle3 = "",
    circle4 = "",
    user = 0;

  // Check horizontally
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 3; j++) {
      circle1 = "#cell" + i.toString() + j.toString();
      circle2 = "#cell" + i.toString() + (j + 1).toString();
      circle3 = "#cell" + i.toString() + (j + 2).toString();
      circle4 = "#cell" + i.toString() + (j + 3).toString();
      currentColor1 = $(circle1).css("background-color");
      currentColor2 = $(circle2).css("background-color");
      currentColor3 = $(circle3).css("background-color");
      currentColor4 = $(circle4).css("background-color");
      if (
        currentColor1.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor2.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor3.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor4.replace(/\s/g, "") === "rgb(0,0,255)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 1;
      } else if (
        currentColor1.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor2.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor3.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor4.replace(/\s/g, "") === "rgb(255,0,0)"
      ) {
        user = 2;
      }
    }
  }
  //   if (user === 1) {
  //     $("p").text(player1 + " has won the game!");
  //     return 1;
  //   } else if (user === 2) {
  //     $("p").text(player2 + " has won the game!");
  //     return 2;
  //   }

  // Check vertically
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols; j++) {
      circle1 = "#cell" + i.toString() + j.toString();
      circle2 = "#cell" + (i + 1).toString() + j.toString();
      circle3 = "#cell" + (i + 2).toString() + j.toString();
      circle4 = "#cell" + (i + 3).toString() + j.toString();
      currentColor1 = $(circle1).css("background-color");
      currentColor2 = $(circle2).css("background-color");
      currentColor3 = $(circle3).css("background-color");
      currentColor4 = $(circle4).css("background-color");
      if (
        currentColor1.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor2.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor3.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor4.replace(/\s/g, "") === "rgb(0,0,255)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 1;
      } else if (
        currentColor1.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor2.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor3.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor4.replace(/\s/g, "") === "rgb(255,0,0)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 2;
      }
    }
  }
  //   if (user === 1) {
  //     $("p").text(player1 + " has won the game!");
  //     return 1;
  //   } else if (user === 2) {
  //     $("p").text(player2 + " has won the game!");
  //     return 2;
  //   }

  // Check diagonally (from top-left to bottom-right)
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 0; j < cols - 3; j++) {
      circle1 = "#cell" + i.toString() + j.toString();
      circle2 = "#cell" + (i + 1).toString() + (j + 1).toString();
      circle3 = "#cell" + (i + 2).toString() + (j + 2).toString();
      circle4 = "#cell" + (i + 3).toString() + (j + 3).toString();
      currentColor1 = $(circle1).css("background-color");
      currentColor2 = $(circle2).css("background-color");
      currentColor3 = $(circle3).css("background-color");
      currentColor4 = $(circle4).css("background-color");
      if (
        currentColor1.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor2.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor3.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor4.replace(/\s/g, "") === "rgb(0,0,255)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 1;
      } else if (
        currentColor1.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor2.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor3.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor4.replace(/\s/g, "") === "rgb(255,0,0)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 2;
      }
    }
  }
  //   if (user === 1) {
  //     $("p").text(player1 + " has won the game!");
  //     return 1;
  //   } else if (user === 2) {
  //     $("p").text(player2 + " has won the game!");
  //     return 2;
  //   }

  // Check diagonally (from top-right to bottom-left)
  for (let i = 0; i < rows - 3; i++) {
    for (let j = 3; j < cols; j++) {
      circle1 = "#cell" + i.toString() + j.toString();
      circle2 = "#cell" + (i + 1).toString() + (j - 1).toString();
      circle3 = "#cell" + (i + 2).toString() + (j - 2).toString();
      circle4 = "#cell" + (i + 3).toString() + (j - 3).toString();
      currentColor1 = $(circle1).css("background-color");
      currentColor2 = $(circle2).css("background-color");
      currentColor3 = $(circle3).css("background-color");
      currentColor4 = $(circle4).css("background-color");
      if (
        currentColor1.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor2.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor3.replace(/\s/g, "") === "rgb(0,0,255)" &&
        currentColor4.replace(/\s/g, "") === "rgb(0,0,255)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 1;
      } else if (
        currentColor1.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor2.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor3.replace(/\s/g, "") === "rgb(255,0,0)" &&
        currentColor4.replace(/\s/g, "") === "rgb(255,0,0)" &&
        user !== 1 &&
        user !== 2
      ) {
        user = 2;
      }
    }
  }

  if (user === 1 && (player[6] === "1" || player[6] === "2")) {
    $("p").text(player1 + " has won the game!");
    return 1;
  } else if (user === 2 && (player[6] === "1" || player[6] === "2")) {
    $("p").text(player2 + " has won the game!");
    return 2;
  }
}
