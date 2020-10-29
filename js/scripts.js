//B Logic
function roman (num) {
const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var romanized = "";
if (num > 3999) {
  romanized = "Sorry Roman Numerals don't go that high!"
} else {
  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumerals[i];
      num -= decimalValue[i];
    }
  }
    
  }
  return romanized;
};


//UI Logic

$(document).ready(function(){
  $("form#userInput").submit(function() {
    event.preventDefault();

    let num = $("input#num").val();
    let result = roman(num);

    $("#output").append(result);

  });
});