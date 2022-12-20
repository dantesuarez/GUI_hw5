/*

    Name: Dante Suarez
    Date: 12/20/2022
    Email: dante_suarez@student.uml.edu
    Assignment: GUI Programming HW5 - Scrabble Game
    File: scrabble.js

*/

///////////////////////////////////////////////////////////////////
//////////////////////// Main code ////////////////////////////////
///////////////////////////////////////////////////////////////////

// Data structure provided in assignment sheet
$(document).ready(function() {
    
    var totalScore = 0;

    //https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
    var ScrabbleTiles = [] ;
    ScrabbleTiles["A"] = { "value" : 1,  "od" : 9,  "nr" : 9, "timg" : "images/Scrabble_Tile_A.png" } ;
    ScrabbleTiles["B"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_B.jpg" } ;
    ScrabbleTiles["C"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_C.jpg" } ;
    ScrabbleTiles["D"] = { "value" : 2,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_D.jpg" } ;
    ScrabbleTiles["E"] = { "value" : 1,  "od" : 12, "nr" : 12, "timg" : "images/Scrabble_Tile_E.jpg" } ;
    ScrabbleTiles["F"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_F.jpg" } ;
    ScrabbleTiles["G"] = { "value" : 2,  "od" : 3,  "nr" : 3, "timg" : "images/Scrabble_Tile_G.jpg" } ;
    ScrabbleTiles["H"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_H.jpg" } ;
    ScrabbleTiles["I"] = { "value" : 1,  "od" : 9,  "nr" : 9, "timg" : "images/Scrabble_Tile_I.jpg" } ;
    ScrabbleTiles["J"] = { "value" : 8,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_J.jpg" } ;
    ScrabbleTiles["K"] = { "value" : 5,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_K.jpg" } ;
    ScrabbleTiles["L"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_L.jpg" } ;
    ScrabbleTiles["M"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_M.jpg" } ;
    ScrabbleTiles["N"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_N.jpg" } ;
    ScrabbleTiles["O"] = { "value" : 1,  "od" : 8,  "nr" : 8, "timg" : "images/Scrabble_Tile_O.jpg" } ;
    ScrabbleTiles["P"] = { "value" : 3,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_P.jpg" } ;
    ScrabbleTiles["Q"] = { "value" : 10, "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_Q.jpg" } ;
    ScrabbleTiles["R"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_R.jpg" } ;
    ScrabbleTiles["S"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_S.jpg" } ;
    ScrabbleTiles["T"] = { "value" : 1,  "od" : 6,  "nr" : 6, "timg" : "images/Scrabble_Tile_T.jpg" } ;
    ScrabbleTiles["U"] = { "value" : 1,  "od" : 4,  "nr" : 4, "timg" : "images/Scrabble_Tile_U.jpg" } ;
    ScrabbleTiles["V"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_V.jpg" } ;
    ScrabbleTiles["W"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_W.jpg" } ;
    ScrabbleTiles["X"] = { "value" : 8,  "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_X.jpg" } ;
    ScrabbleTiles["Y"] = { "value" : 4,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_Y.jpg" } ;
    ScrabbleTiles["Z"] = { "value" : 10, "od" : 1,  "nr" : 1, "timg" : "images/Scrabble_Tile_Z.jpg" } ;
    ScrabbleTiles["Blank"] = { "value" : 0,  "od" : 2,  "nr" : 2, "timg" : "images/Scrabble_Tile_Blank.jpg" } ;

    //Array variable for the board with 2 tiles set to be bonus tiles
    var board = [];
    board[0] = {"bonus":1, "board_image":"images/Scrabble_Board_Blank.png"};
    board[1] = {"bonus":1, "board_image":"images/Scrabble_Board_Blank.png"};
    board[2] = {"bonus":2, "board_image":"images/Scrabble_Board_Bonus.png"}; // Bonus Square
    board[3] = {"bonus":1, "board_image":"images/Scrabble_Board_Blank.png"};
    board[4] = {"bonus":1, "board_image":"images/Scrabble_Board_Blank.png"};
    board[5] = {"bonus":2, "board_image":"images/Scrabble_Board_Bonus.png"}; // Bonus Square
    board[6] = {"bonus":1, "board_image":"images/Scrabble_Board_Blank.png"};
    
    // Add board images to HTML
    for (var i = 0; i < board.length; ++i) {
        $("#board").append("<img src="+board[i].board_image+" id = b"+ i +" class='board_tiles ui-widget-content snapZone'>");
    }

    // Make board droppable
    // https://jqueryui.com/droppable/
    $(".board_tiles").droppable({

        drop: function(event,ui) {
            // https://stackoverflow.com/questions/40571397/what-does-ui-draggable-draggable-means
            $(ui.draggable).addClass("on_board");
            
            if ($(this).attr('id') == 'b2' || $(this).attr('id') == 'b5') { 
                $(ui.draggable).addClass("bonus", 0); 
            } else {
                $(ui.draggable).removeClass("bonus");
            }

            $("#current_score").html("Current Score: " + get_score(ScrabbleTiles));
        }
    });

    // Make tile rack droppable
    $("#tile_rack").droppable({
        drop: function(event,ui) {
            $(ui.draggable).removeClass("on_board");
            $(ui.draggable).removeClass("bonus");
            $("#current_score").html("Current Score: " + get_score(ScrabbleTiles));
        }
    });

    // Adds the initial tiles to the tile rack by calling add_new_tile
    // and updating the tiles left score on the screen
    add_new_tile(ScrabbleTiles);
    $("#tiles_left").html("Tiles Left: " + dispense_tile(ScrabbleTiles));

    // Function that handles when the "submit word" button is pressed
    // Function updates current score, and dispenses new tiles
    $("#next-btn").click(function() {
        if ($(".on_board").length >= 2) {
            
            totalScore += get_score(ScrabbleTiles);

            $(".on_board").remove();
            $("#total_score").html("Total Score: " + totalScore);
            add_new_tile(ScrabbleTiles);
            if (dispense_tile(ScrabbleTiles) <= 7) {
                alert("You finished the game with a total score of " + totalScore);
                new_game(ScrabbleTiles);
                add_new_tile(ScrabbleTiles);
            }
            $("#tiles_left").html("Tiles Left: " + dispense_tile(ScrabbleTiles));

            $("#current_score").html("Current Score: 0");
        }
    });

    // Function for when the "reset" button is pressed
    // Calls the new game function and resets the tiles left
    $("#reset-btn").click(function() {
        new_game(ScrabbleTiles);
        add_new_tile(ScrabbleTiles);
        $("#tiles_left").html("Tiles Left: " + dispense_tile(ScrabbleTiles));
    });

    // Function for when the "new tiles" button is pressed
    // Function checks to see if there is enough tiles to fill the board
    // If there isn't the game is over and there is an alert with the
    // Final score.  If there are enough tiles, it will dispense 7 new ones.
    $("#new-btn").click(function() {
        if (dispense_tile(ScrabbleTiles) <= 7) {
            alert("You finished the game with a total score of " + totalScore);
            new_game(ScrabbleTiles);
            add_new_tile(ScrabbleTiles);
            $("#tiles_left").html("Tiles Left: " + dispense_tile(ScrabbleTiles));
        }
        else {
            if ($(".game_tiles").length) { $(".game_tiles").remove(); }
            add_new_tile(ScrabbleTiles);
            $("#tiles_left").html("Tiles Left: " + dispense_tile(ScrabbleTiles));
        }
    });
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//////////////////////// Helper Functions /////////////////////////
///////////////////////////////////////////////////////////////////

// Function with a long if statement that generates a new letter
// based on a random number from 1-100 and the od attribute of the 
// letters in the data structure. 
function new_random_letter() {
    // Reference: https://www.w3schools.com/jsref/jsref_random.asp
    random_num = Math.floor((Math.random() * 100) + 1);
    if (random_num > 0 && random_num <= 9) { return "A"; } // od: 9
    else if (random_num > 9 && random_num <= 11) { return "B"; } // od: 2
    else if (random_num > 11 && random_num <= 13) { return "C"; } // od: 2
    else if (random_num > 13 && random_num <= 17) {return "D"; } // od: 4
    else if (random_num > 17 && random_num <= 29) {return "E"; } // od: 12
    else if (random_num > 29 && random_num <= 31) {return "F"; } // od: 2
    else if (random_num > 31 && random_num <= 34) {return "G"; } // od: 3
    else if (random_num > 34 && random_num <= 36) {return "H"; } // od: 2
    else if (random_num > 36 && random_num <= 45) {return "I"; } // od: 9
    else if (random_num > 45 && random_num <= 46) {return "J"; } // od: 1
    else if (random_num > 46 && random_num <= 47) {return "K"; } // od: 1
    else if (random_num > 47 && random_num <= 51) {return "L"; } // od: 4
    else if (random_num > 51 && random_num <= 53) {return "M"; } // od: 2
    else if (random_num > 53 && random_num <= 59) {return "N"; } // od: 6
    else if (random_num > 59 && random_num <= 67) {return "O"; } // od: 8
    else if (random_num > 67 && random_num <= 69) {return "P"; } // od: 2
    else if (random_num > 69 && random_num <= 70) {return "Q"; } // od: 1
    else if (random_num > 70 && random_num <= 76) {return "R"; } // od: 6
    else if (random_num > 76 && random_num <= 80) {return "S"; } // od: 4
    else if (random_num > 80 && random_num <= 86) {return "T"; } // od: 6
    else if (random_num > 86 && random_num <= 90) {return "U"; } // od: 4
    else if (random_num > 90 && random_num <= 92) {return "V"; } // od: 2
    else if (random_num > 92 && random_num <= 94) {return "W"; } // od: 2
    else if (random_num > 94 && random_num <= 95) {return "X"; } // od: 1
    else if (random_num > 95 && random_num <= 97) {return "Y"; } // od: 2
    else if (random_num > 97 && random_num <= 98) {return "Z"; } // od: 1
    else if (random_num > 98 && random_num <= 100) {return "Blank"; } // od: 2
    else { return "Error"; }
}

// Function to generate a new random tile
function new_tile(tile_data) {

    //generate new letter
    let new_letter = new_random_letter();

    while (tile_data[new_letter].nr <= 0){ 
        new_letter = new_random_letter(); 
    }

    // add it to the tile rack
    tile_data[new_letter].nr -= 1;
    $("#tile_rack").prepend("<img src='./images/Scrabble_Tile_"+new_letter+".jpg' id='"+new_letter+"' class='game_tiles ui-widget-content'></img>");

    //make the new letter draggable
    $(".game_tiles").draggable({revert:'invalid', snap: ".snapZone", snapMode: "inner" });
}

// Function for drawing the new tiles after a word is submitted, the new
// tiles button is pressed, or a new game is started
function add_new_tile(tile_data) {
    // If out of tiles, the game is over
    if (!dispense_tile(tile_data)) {
        alert("Game over.");
        new_game(tile_data);
    } else {
        // Add tiles until the tile rack is full (7 tiles)
        for (let player_tiles = $(".game_tiles").length; player_tiles < 7; ++player_tiles) {
            new_tile(tile_data);
        }
    }
}

// Function that checks if there are still tiles to be dispensed
function dispense_tile(tile_data) {
    var tiles_left = 0;
    
    // For loop runs through the tile data and iterates each time it
    // finds a tile
    let keys = Object.keys(tile_data);
    for (let i = 0; i < Object.keys(tile_data).length; ++i) {
        tiles_left += tile_data[keys[i]].nr;
    }

    //return amount of tiles left in the bag
    return tiles_left;
}

// Function to check and return the current score of the game
function get_score(tile_data) {
    if ($(".on_board").length >= 2) {
        let scr = 0;
        let board_tiles = document.getElementsByClassName('on_board');

        var tileltr;
        for (var i = 0; i < board_tiles.length; ++i) {
            tileltr = board_tiles[i].id;
            scr += tile_data[tileltr].value;
        }

        switch ($(".bonus").length) {
            case 1:
                return scr * 2;
            case 2:
                return scr * 4;
            default:
                return scr;
        }
    }
    return 0;
}

// Function to reset the game
function new_game(tile_data) {
    let keys = Object.keys(tile_data);

    // Clear the board
    if ($(".game_tiles").length){ $(".game_tiles").remove(); }

    // Reset the tile distribution
    for (let i = 0; i < Object.keys(tile_data).length; ++i) {
        tile_data[keys[i]].nr = tile_data[keys[i]].od;
    }

    // Reset the actual HTML elements holding the score
    $("#total_score").html("Total Score: --");
    $("#current_score").html("Current Score: 0");
    totalScore = 0;
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
