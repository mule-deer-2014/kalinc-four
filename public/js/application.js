window.playerId = 1;

$("td").click(function() {
  $clicked_cell = $(this)
  col_num = find_column($clicked_cell);
  column_cells = $("." + col_num);

  var cell_to_fill = find_cell_to_fill(column_cells);
  player_pic = toggle_player();
  cell_to_fill.append( player_pic );
});

var find_cell_to_fill = function(column_cells) {
  for (var i = 0; i < column_cells.length; i++) {
    cell = $(column_cells[i]);
    console.log(cell)
    if (cell.find(".players").length === 0){
      cell_to_fill = cell;
    }
  }
  return cell_to_fill;
}


var find_column = function(clicked_cell) {
  return clicked_cell.attr('class');
}

var toggle_player = function() {
  elem = document.createElement("div");
  className = "players"
  if (window.playerId === 1 ) {
    elem.className = className + " player1";
    window.playerId = 2;
  } else if (window.playerId === 2) {
    elem.className = className + " player2";
    window.playerId =1;
  }
  return elem
}


