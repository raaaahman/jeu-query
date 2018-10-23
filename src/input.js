$(document).ready(function(){
  $('#royaume').hide();
  $('#input-button').click(function() {
    $('#royaume').show(400);
    alert($('#input-field').attr('value'));
  });
});
