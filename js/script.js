let turn = 'player 1';
let player1 = [];
let player2 = [];
let turns = 0;
let player1Name;
let player2Name;
let game = 'live';

// Function to create start screen

(() => {
    const html = `<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1>Player 1 Name: <input type="text" name="fname"><br>
  Player 2 Name: <input type="text" name="lname"><br><a href="#" class="button">Start game</a><a href="#" class="button computer">Start 1 player game</a></div></header>`;
    $('html').append(html);
})();

// Create player name variables from the start screen on "click"

$('#start > header > a').on('click', function() {
    player1Name = $('#start > header > input[type="text"]:nth-child(2)').val();
    player2Name = $('#start > header > input[type="text"]:nth-child(4)').val();
    if ($(this).html() === 'Start 1 player game') {
        player2Name = 'Computer';
    }
    $('#start').remove();
    $("#player1").append(player1Name);
    $("#player2").append(player2Name);
});

// Generating a random number for the computer player logic

$("ul li").click(function() {
    setTimeout(function computer() {
        if (turn === "player 2" && player2Name === "Computer" && game === 'live') {
            do {
                var position = Math.floor(Math.random() * Math.floor(9));
            }
            while ($("#board > ul > li").eq(position).hasClass("box-filled-1") || $("#board > ul > li").eq(position).hasClass("box-filled-2"));
            $("#board > ul > li").eq(position).click();
            $('.overlay').remove();
        }
    }, 2000);
});

// Adding active class to player 1 div on load

(() => {
    $("#player1").addClass("active");
})
();

// Show symbol of player on hover

function hoverChange() {
    if (turn === 'player 1') {
        $("ul li").hover(
            function() {
                $(this).removeClass("show_x");
                $(this).addClass("show_o");
            },
            function() {
                $(this).removeClass("show_o");
            }
        );
    }

    if (turn === 'player 2') {
        $("ul li").hover(
            function() {
                $(this).removeClass("show_o");
                $(this).addClass("show_x");
            },
            function() {
                $(this).removeClass("show_x");
            }
        );
    }
}

hoverChange();

// Function to select a space on click

$("ul li").click(
    function() {
        if ($(this).hasClass("box-filled-1") || $(this).hasClass("box-filled-2")) {
            if (turn === 'player 1') {
                turn = 'player 2';

            } else if (turn === 'player 2') {
                turn = 'player 1';
            }

            alert('Space Taken');

        } else {

            if (turn === 'player 1') {
                $(this).addClass("box-filled-1");
                player1.push($(this).index()); // Pushing value to player 1 array
                turns += 1;
            } else if (turn === 'player 2') {
                $(this).addClass("box-filled-2");
                player2.push($(this).index()); // Pushing value to player 2 array
                turns += 1;
            }
        }
    });

// Function to control player turn

$("#board > ul > li").click(() => {
    if (turn === 'player 1') {
        turn = 'player 2';
    } else if (turn === 'player 2') {
        turn = 'player 1';
    }

    (() => {
        if (turn === 'player 1') {
            $("#player1").addClass("active");
            $("#player2").removeClass("active");
        } else if (turn === 'player 2') {
            $("#player2").addClass("active");
            $("#player1").removeClass("active");
        }
    })
    ();

    hoverChange();

// Creating logic to decide a winner

    if (

        player1.includes(0) && player1.includes(1) && player1.includes(2) ||
        player1.includes(3) && player1.includes(4) && player1.includes(5) ||
        player1.includes(6) && player1.includes(7) && player1.includes(8) ||

        player1.includes(0) && player1.includes(3) && player1.includes(6) ||
        player1.includes(1) && player1.includes(4) && player1.includes(7) ||
        player1.includes(2) && player1.includes(5) && player1.includes(8) ||

        player1.includes(0) && player1.includes(4) && player1.includes(8) ||
        player1.includes(6) && player1.includes(4) && player1.includes(2)

    ) {

        const html = `<div class="screen screen-win screen-win-one" id="finish">
     <header>
       <h1>Tic Tac Toe</h1>
       <p class="message"> ${player1Name} Winner</p>
       <a href="#" class="button">New game</a>
     </header>
   </div>`;
        game = 'ended';
        $('html').append(html);
    } else if (

        player2.includes(0) && player2.includes(1) && player2.includes(2) ||
        player2.includes(3) && player2.includes(4) && player2.includes(5) ||
        player2.includes(6) && player2.includes(7) && player2.includes(8) ||

        player2.includes(0) && player2.includes(3) && player2.includes(6) ||
        player2.includes(1) && player2.includes(4) && player2.includes(7) ||
        player2.includes(2) && player2.includes(5) && player2.includes(8) ||

        player2.includes(0) && player2.includes(4) && player2.includes(8) ||
        player2.includes(6) && player2.includes(4) && player2.includes(2)

    ) {

        const html = `<div class="screen screen-win screen-win-two" id="finish">
     <header>
       <h1>Tic Tac Toe</h1>
       <p class="message">${player2Name} Winner</p>
       <a href="#" class="button">New game</a>
     </header>
   </div>`;
        game = 'ended';
        $('html').append(html);
    } else if (turns === 9) {
        const html = `<div class="screen screen-win screen-win-tie" id="finish">
    <header>
      <h1>Tic Tac Toe</h1>
      <p class="message">It's a Tie!</p>
      <a href="#" class="button">New game</a>
    </header>
  </div>`;
        game = 'ended';
        $('html').append(html);
    }

// Start new game on button click

    $('#finish > header > a').on('click', function() {
        location.reload();
    });
});

// Preventing user slection during computer turn

$("ul li").click(
    function() {
if (turn === 'player 2' && player2Name === "Computer"){
  $( 'body' ).append( `<div class='overlay'></div>` );
}
});
