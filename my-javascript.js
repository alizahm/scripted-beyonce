/* global $ */
$(function() {
  $("#hide-contents").click(function() {
    $("#hide-contents, #contents ol").hide(500);
    $("#show-contents").show(500);
  });

  $("#show-contents").click(function() {
    $("#hide-contents, #contents ol").show(500);
    $("#show-contents").hide(500);
  });
  
  $("#edit-earlylife").click(function() {
    let content = prompt("Early life");
    $("#earlylife").text(content);
  });
    var hide = "#discography"
  
  $("#dangerously").click(function() {
    $("#dangerously-in-love, #DIL").show(500);
    $("#4-album, #lemonade-album").hide(500);
    $("#FOUR, #LEMONS").hide(500);
  
  });
  
  $("#4").click(function() {
    $("#dangerously-in-love, #lemonade-album").hide(500);
    $("#4-album, #FOUR").show(500);
    $("#DIL, #LEMONS").hide(500);
  });
  
  $("#lemonade").click(function() {
    $("#dangerously-in-love, #4-album").hide(500);
    $("#lemonade-album, #LEMONS").show(500);
    $("#DIL, #FOUR").hide(500);
  });
  
  
  
  
  
  
  
});
