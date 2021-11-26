$(document).ready(function () {
  $('.selectpicker').selectpicker();
  $('.bs-searchbox').find('input').attr('placeholder', 'Search...');
  $('.bs-searchbox').append(
    "<li class='fa fa-search select-search-icon'></li>"
  );
});