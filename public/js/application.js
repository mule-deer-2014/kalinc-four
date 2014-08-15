window.playerId = 1;

$("td").click(function() {
  $clickedCell = $(this)
  var colNum = findColumn($clickedCell);
  var columnCells = $("." + colNum);

  var cellToFill = findCellToFill(columnCells);
  var playerPic = togglePlayer();
  if (cellToFill != null) {
    cellToFill.append( playerPic );
  }
  checkCols();
});

var findCellToFill = function(columnCells) {
  for (var index = 0; index < columnCells.length; index++) {
    var cell = $(columnCells[index]);
    if (cell.find(".players").length === 0){
      var cellToFill = cell;
    }
  }

  //checks to see if column is full
  if (columnCells.first().find(".players").length >= 1) {
    cellToFill = null;
  }
  return cellToFill;
};

var findColumn = function(clickedCell) {
  return clickedCell.attr('class');
};

var togglePlayer = function() {
  var playerPic = document.createElement("div");
  var className = "players";
  if (window.playerId === 1 ) {
    playerPic.className = className + " player1";
    window.playerId = 2;
  } else if (window.playerId === 2) {
    playerPic.className = className + " player2";
    window.playerId =1;
  }
  return playerPic;
};

var checkCols = function() {
  // console.log("in checkCols")
  var player1Counter = 0;
  var player2Counter = 0;
  for (var column = 1; column <= 7; column ++){
    // console.log("inside first column for loop")
    var columnCells = $("." + column);
    for (var index = 0; index <= 5; index ++) {
      // console.log("inside cell for loop")
      var cell = $(columnCells[index])
      cell.find(".player1").length
      if (cell.find(".player1").length >= 1){
        player1Counter += 1
        player2Counter = 0 
        console.log("player1" + player1Counter)
      } else if (cell.find(".player2").length >= 1) {
        player2Counter += 1
        player1Counter = 0 
        console.log("player2" + player2Counter)
      }
    }
  }
  if (player1Counter >=4 || player2Counter >= 4) {
    alert("winnnerrrr")
  }
}





// var check_rows_for_winner = function() {
//   for (var i = 1; i <= 6; i++) {
//     rowCells = $("row_" + i);

//   }

// };
