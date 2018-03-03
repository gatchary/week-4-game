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
    var fighter= [];
    var enemies= [];
   // var that = this;
 //  console.log(players);
 //  console.log(fighter.length);
    //create function to move players / images from one div to fighter and
    $(".player").click( function ()
    {
   //     console.log(players);
// use the this keyword to select element clicked by assigning it to a variable 
    var playerSelected = $(this);
 //   console.log(playerSelected);
    //append to the figher div 
 $("#fighter").append(playerSelected );
 //console.log($("fighter"));
 //remove the class from the selected element so i can have the others to use
 $(playerSelected ).removeClass( "player" );
 //push the selected fighter to an empty array for later use
 fighter.push(playerSelected); 
// console.log(fighter.length);
 
console.log(playerSelected);
// console.log("this is fighter array" + fighter)
 
// console.log($(".player"));
 // use for loop to append the remaining elements in the player array to enemies 
 
 var players = $(".player");
 console.log("here it should have the class of player" + players);
 
 for (var i = 0; i < players.length; i++) {
    $("#enemies").append(players[i]);
   // console.log(players[i]);
   // console.log(players);
    //push the remainder of the players array into the enemies array for later use
    
}
$(players).removeClass("player");
enemies = players.slice(0);
console.log(enemies.length);
//$(enemies).removeClass("player");
console.log(enemies);





 

 
}

); 
// create a click function to add enimies to opponent section of the game 

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