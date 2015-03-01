require('jquery');
require('jquery-scrollstop');
var moment = require('moment');
$(function(){
  // moment.js
  var date = moment().format('llll');
  $('body').append('<p><b>'+date+'</b></p>');
  // jquery-scrollstop
  $(window).on('scrollstop', function(event) {
    event.preventDefault();
    alert('Scroll is Stop!');
  });
});