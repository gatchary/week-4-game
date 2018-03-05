//documet ready
$({}).ready(function()
{
    //create variables
    var gameRunning = true;
    var player1 = $("#player1");
    var player2 = $("#player2");
    var player3 = $("#player3");
    var player4 = $("#player4");
    var players =[player1, player2, player3, player4];
    console.log(players);
    //array for the battle ground 
    var opponent = [];
    var fighter= [];
    var enemies= [];
    // to show and hide other html elements on the page
    $("#enemies").hide();
    $("#attack").hide();
    $("#fighter").hide();
    $("#opponent").hide();
    //variable for players health points 
    var p1hp = 200;
    var p2hp = 180;
    var p3hp = 160;
    var p4hp = 140;
    // put all players health points in an array
    var currentHp = [];
    console.log(currentHp)
    var opponentHp = [];
    
    var opponentCounterAttack = [];
    var fighterAttack =[];

  
    // add hp to html 
    $("#player1Hp").append(p1hp);
    $("#player2Hp").append(p2hp);
    $("#player3Hp").append(p3hp);
    $("#player4Hp").append(p4hp);
    
   
   
    //create function to move players / images from one div to fighter and
    $(".player").on('click', function () {
  
// use the this keyword to select element clicked by assigning it to a variable 
         var playerSelected = $(this);
 // turn off click to prevnt further use
             $( ".player" ).off();
 
    //append to the figher div 
 $("#fighter").append(playerSelected );
 $("#fighter").show(1000);
 $("#enemies").show(3000);
 $("#iNeedFix").hide(2000);


 //remove the class from the selected element so i can have the others to use
 $(playerSelected ).removeClass( "player" );
 $(playerSelected ).addClass( "fighter" );
 $(playerSelected ).addClass( "currentHp" );
 console.log(playerSelected);


 //push the selected fighter to an empty array for later use
 fighter.push(playerSelected); 
 console.log(fighter);

 /* wrote function called playersHp to allot all players hp and write it to an array
 nesting the ifstatements 
*/
function playersHp(){

 if($(playerSelected).attr('id') == 'player1'){
        currentHp.push(p1hp);
   
   
  }        else {
    
                   if($(playerSelected).attr('id') == 'player2'){

                              currentHp.push(p2hp);
     
   
    }
    
                              if($(playerSelected).attr('id') == 'player3'){

                         currentHp.push(p3hp);
     

    }
                     if($(playerSelected).attr('id') == 'player4'){

                   currentHp.push(p4hp);
   
    }
  }


 



}
playersHp();
console.log(currentHp);
// create a if statement to assert the attack capabilites
/*


 else {
    return "NOT positive";
  }
if (fighter <=  player1) {

   
   
  
   
   

} else {
  alert("no fighter Selected")
};


if (playerSelected <= player2){
  currentHp.push(p2hp);
    console.log(currentHp);

  alert("player2 selected it can take code")

}; 


if (fighter <= $("#player3")) {


  p1baseAttack =  16;
}

else if (fighter <= $("#player4")) {

  p1baseAttack =  20;

} else {
  alert("chose a fighter")


}

*/
 

 // use for loop to append the remaining elements in the player array to enemies 
 
 var players = $(".player");

 
 for (var i = 0; i < players.length; i++) {
    $("#enemies").append(players[i]);
 
    //push the remainder of the players array into the enemies array for later use
    
}
// remove class of players from remaining 3 players 
$(players).removeClass("player");
// add the players to the enemy array 
enemies = players.slice(0);


//add new class to the players of enemies 
$(enemies).addClass("enemies")

if (fighter.length == 1) {
//$("players").empty();

} else {
    
    $("players").empty();
}
//$(enemies).removeClass("player");






 
$(".enemies").on('click', function (){
  
    
   var enemySelected = $(this);
   $( ".enemies" ).off();
  
   
   $(enemySelected).addClass("opponent")
   $(enemySelected).removeClass("enemies")
      
    //enemies.splice($.inArray(enemySelected, [enemies]));
    $("#opponent").append(enemySelected);
    opponent.push(enemySelected);
   
    if (opponent.length == 1) {
      
      $("#enemies").hide(2000);
  
     }else {
      //$( ".enemies" ).on();
     }


    if (opponent <= $("#player1")) {
      p1counterAttack = 10;
      alert("opponent selected it can take code")
   
   } else if (opponent <= $("#player2")){
   
    p2counterAttack = 12;
     alert("oppo2 selected it can take code")
   
   } else if (opponent <= $("#player3")) {
    alert("oppo3 selected it can take code")
    p3counterAttack = 14;
   
   }
   
   else if (opponent <= $("#player4")) {
    alert("oppo4 selected it can take code")
    p4counterAttack = 16;
   
   } else {
     opponent.length != 2;
     alert("chose an Opponent")
     
   }
   

     $(opponent).push(opponentHp)
     $("#opponent").show(1000);
     $("#attack").show(3000);

    
      
 
  











       $(".attack").on('click', function (){
        //fighterAttack = baseAttack + attackPower
        $("currentHp").append(fighterAttack)
        if ($("currentHp") <= $("#player1Hp") ) {
          alert("am working ");

          $("#player1Hp").append("currentHp")
        }
            

        fighterAttack - opponentHp
        opponentCounterAttack - fighterHp
       $("#fighter").append(fighterHp)
       $("#opponent").append(opponentHp)
        
      
      if (fighterHp <= 0)
                   {
      
                   }else if( opponentHp <= 0) {
                     
                   }else {
      
                   }
      
                   
      
      
      
      
      
      
      });
    

});

 
}); 



}); 



// create a click function to add enimies to opponent section of the game 





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