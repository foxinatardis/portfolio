$(document).ready(function() {
  getSelectionFromUrl();
});

function getSelectionFromUrl() {
  var selection = window.location.href.split('#')[1];
  showSelectedDiv(selection);
}

function showSelectedDiv(className) {
  $('.not-hidden').addClass('hidden');
  $('.not-hidden').removeClass('not-hidden');
  $('.' + className).removeClass('hidden');
  $('.' + className).addClass('not-hidden');
}
