$(document).ready(function(){

var total = 0;
var crysNum ;
var number;
var wins = 0;
var losses = 0;


var min = 19;
var max = 120;
number =  Math.floor(Math.random() * (max - min + 1)) + min;


crysNum = {
  getCrystal: function (min, max) {
    min = 1;
    max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function startGame() {
    $('#randNumb').text(number);
    total = 0;

}
var totalClicks;

totalClicks = {
    crysClicks: function() {

var imgCrys1 = $('#crystal-1');
    imgCrys1.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-1').append(imgCrys1);

var imgCrys2 = $('#crystal-2');
    imgCrys2.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-2').append(imgCrys2);
    
var imgCrys3 = $('#crystal-3');
    imgCrys3.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-3').append(imgCrys3);

var imgCrys4 = $('#crystal-4');
    imgCrys4.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-4').append(imgCrys4);


    $('#crystal-1').on("click", function() {
       var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);

      var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);

        if (newTotal === number) {
            wins++;
        $('#wins').text(wins);
        
        } 

        if (newTotal > number) {
            lose++;
        $('#losses').text(losses);
        }
    })

    $('#crystal-2').on("click", function() {
        var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
        var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);

        if (newTotal === number) {
            wins++;
        $('#wins').text(wins);
        
        } if (newTotal > number) {
            lose++;
        $('#losses').text(losses);
        }
        })    

    $('#crystal-3').on("click", function() {
        var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
      var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);

        if (newTotal === number) {
            wins++;
        $('#wins').text(wins);
        
        } 

        if (newTotal > number) {
            lose++;
        $('#losses').text(losses);
        }
        })  

    $('#crystal-4').on("click", function() {
        var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
        var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);

        if (newTotal === number) {
            wins++;
        $('#wins').text(wins);
        
        } 

        if (newTotal > number) {
            lose++;
        $('#losses').text(losses);
        }
        })  
}
}    
totalClicks.crysClicks();
 


    startGame();

});

