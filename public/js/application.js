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
});

var findCellToFill = function(columnCells) {
  for (var i = 0; i < columnCells.length; i++) {
    var cell = $(columnCells[i]);
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


var check_rows_for_winner = function() {
  for (var i = 1; i <= 6; i++) {
    rowCells = $("row_" + i);

  }

};
