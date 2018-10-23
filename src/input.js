$(document).ready(function(){
  $('#royaume').hide();

  $('#input-button').click(function() {
    let output = "";
    input = $('#input-field').val();
    inputCharList = input.split('');
    for (let char = 0; char < inputCharList.length; char ++) {
      output += inputCharList[char];
      if (char == 2) {
        output += '#schema > ';
      }
    }
    eval(output);
  });
});
