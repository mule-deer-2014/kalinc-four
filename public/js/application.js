$("td").click(function() {
  elem = document.createElement("div");
  elem.className = "poop";
  if ($(this).find(".poop").length == 0) {
    $(this).append( elem );
  };

});


