let game_grid = $("#tic-tac-toe");
let symbol = "x";
game_grid.find("button").click(function () {
    $(this).html("<strong>" + symbol + "</strong>");

    if (symbol == "x") {
        symbol = "0";
    } else {
    symbol = "x";
}

});

$(#reset).click(function ()  {
    game_grid.find("button").html("");

});