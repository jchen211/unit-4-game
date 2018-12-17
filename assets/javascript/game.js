$(document).ready(function(){

var total = 0;
var crysNum = [];
var wins = 0;
var losses = 0;

function getRandomNumber(min, max) {
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
    getRandomNumber();
    $('#randNumb').text(getRandomNumber());
    total = 0;

}



var imgCrys1 = $('#crystal-1');
    imgCrys1.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-1').append(imgCrys1);

var imgCrys1 = $('#crystal-2');
    imgCrys1.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-2').append(imgCrys1);
    
var imgCrys1 = $('#crystal-3');
    imgCrys1.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-3').append(imgCrys1);

var imgCrys1 = $('#crystal-4');
    imgCrys1.attr('data-crys', crysNum.getCrystal()); 
    $('crystal-4').append(imgCrys1);

$('#crystal-1').on("click", function() {
    var crystalValue = ($(this).attr("data-crys"));
    crystalValue = parseInt(crystalValue);

    var newTotal = total += crystalValue;
    $('#addedTotal').text(newTotal);
    })

    $('#crystal-1').on("click", function() {
        var crystalValue = ($(this).attr("data-crys"));
        crystalValue = parseInt(crystalValue);
    
        var newTotal = total += crystalValue;
        $('#addedTotal').text(newTotal);
        })    



    startGame();

});

