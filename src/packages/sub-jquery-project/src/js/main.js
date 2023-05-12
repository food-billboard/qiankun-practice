
let index = 0 
const color = ['red', 'yellow']

$(document).ready(function(){
  $("h1").click(function(){
    index ++ 
    index %= 2
    $(this).css('color', color[index]);
  });
});