function showFiction(className) {
  $('.story').addClass('hidden');
  $('.story').removeClass('not-hidden');
  $('.' + className).removeClass('hidden');
  $('.' + className).addClass('not-hidden');
}
