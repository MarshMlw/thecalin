$(document).ready(function() {
  $('.letter').each(function() {
    var firstletter = $(this).text().charAt(0);
    $(this).attr('firstLetter', firstletter)
  });
  if ($(window).width()<640) {
    $('.text-plan').insertBefore($('.plan'));
  }
});
