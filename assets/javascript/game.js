$(document).ready(function(){

var total = 0;
var crysNum;
var wins = 0;
var losses = 0;
var isWinner = false;

$("#crystal-1").on("click", purpleCrys);
$("#crystal-2").on("click", redCrys);
$("#crystal-3").on("click", greenCrys);
$("#crystal-4").on("click", blueCrys);

function getNumber(min, max) {
    min = 19;
    max = 120;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

crysNum = {
  getCrystal: function (min, max) {
    min = 1;
    max = 12;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function startGame() {
    getNumber();
    $('#randNumb').text(getNumber());
}

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


function purpleCrys() {
    var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
    var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);    
    }

function redCrys() {
    var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
    var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);  
    }

function greenCrys() {
    var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
    var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);  
    }    

function blueCrys() {
    var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
    var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);  
    } 



startGame();
});

