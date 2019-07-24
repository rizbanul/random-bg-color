function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colors = ["#808080", "#3BD738", "#FF0000", "Orange", "Violet", "Indigo", "Yellow "];

$(document).ready(function(){
  $(".test").hover(function(){
    $(this).css("background-color", colors[getRandomInt(0,6)]);
    }, function(){
    $(this).css("background-color", "white");
  });
});
