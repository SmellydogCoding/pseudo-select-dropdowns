'use strict';

// Hide original select boxes and show pseudo select boxes
// If a user without JavaScript enters the page, the original select boxes will be shown
$('select').hide();
$('#dropdown1, #dropdown2, #dropdown3').removeClass('hidden');

// Open and close pseudo select boxes
$('.option-container').click(function() {
  var targetList = $(this).next().children('li');
  if (targetList.css('display') === 'none') {
    targetList.slideDown(300);
    $(this).children('.option-arrow').children('img').addClass('spin');
  } else {
    targetList.slideUp(300);
    $(this).children('.option-arrow').children('img').removeClass('spin');
  }
});

// When you choose an option in the pseudo select box dropdown:
  // The value in the 'data-option' is assigned to the value of the corrisponding select element in the original form
  // The selection is then shown in the pseudo drop down as selected
  // The pseudo select box dropdown closes
$('li').click(function() {
  var value = $(this).attr('data-option');
  var selectTarget = $(this).parent().prev().attr('data-selectid');
  var name = $(this).html();
  $('#' + selectTarget).val(value);
  $(this).parent().prev().children('.option-label').html(name);
  $(this).parent().children('li').slideUp(300);
  $(this).parent().prev().children('.option-arrow').children('img').removeClass('spin');
});