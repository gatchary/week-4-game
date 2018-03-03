//documet ready
$(document).ready(function()
{
    //creat variables
    var gameRunning = true;
    var player1 = $("#player1");
    var player2 = $("#player2");
    var player3 = $("#player3");
    var player4 = $("#player4");
    var players =[player1, player2, player3, player4];
    var opponent = [];
   // var that = this;

    //create function to move players / images from one div to fighter and
    $(".player").click( function ()
    {

    var playerSelected = $(this);
    console.log(playerSelected);
 $("#fighter").append(playerSelected );
 console.log($("fighter"));
 $(playerSelected ).removeClass( "player" );
 console.log(playerSelected);
 console.log($(".player"));
 var players = $(".player");
 for (var i = 0; i < players.length; i++) {
    $("#enemies").append(players[i]);
}
 

 

 
}

); 


}); 








 //$("#opponent").append(players);
  
  
 /*
    if ( playerSelected == $("#fighter" ) 
    
 )
 
  {
        $(players ).removeClass( "player" );
        console.log();
      $("#enemies").append( players );
      console.log();
      $(players) = null;
      console.log();
    } else {
       // $(playerSelected ).removeClass( "player" );
       // $("#opponent").append(players);
       $( "#players" ).detach();
       
    }
    console.log();
  });
  */


   // && $("#opponent").append(players);
   
      // add remaining elements in player to enemies
      /*
     if (playerSelected == $("#fighter")) {

      $(function (){

    
        for (i = 0; i < players.length; i--) {
           
           $("#players").detach()
            opponent = $("#opponent");
            $("#opponent").append(players[i])
            console.log(opponent);
            console.log(players);
        }
    });  
    */

 



    
   




        
     

    
     // Will stop running after "three"
   
    
      // Outputs: one two three});