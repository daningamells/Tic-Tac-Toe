let turn = 'player 2'
players = [];

(() => {
  const html = `<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>`;
  $('html').append(html);
})();

$('#start').on('click', () => $('#start').remove());

(() => {
$( "#player1" ).addClass( "active" );

if (turn === player2) {
$( "#player2" ).addClass( "active" );
$( "#player1" ).removeClass( "active" );
}
})
();


if (turn === 'player 1') {
$( "ul li" ).hover(
  function() {
    $( this ).addClass( "show_x" );
  }, function() {
    $( this ).removeClass( "show_x" );
  }
)};

if (turn === 'player 2') {
$( "ul li" ).hover(
  function() {
    $( this ).addClass( "show_o" );
  }, function() {
    $( this ).removeClass( "show_o" );
  }
)};
