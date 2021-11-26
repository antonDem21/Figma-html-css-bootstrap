$(document).ready(function () {
  $('.selectpicker').selectpicker();
  $('.bs-searchbox').find('input').attr('placeholder', 'Search...');
  $('.bs-searchbox').append(
    "<li class='fa fa-search select-search-icon'></li>"
  );

  $('.bs-searchbox').find('input').on('input', function () {
    console.log($(this).val());
    if ($('.no-results').length) {
      if ($('.select-custom-panel').length == 0) {
        $('.no-results').replaceWith("<div class='select-custom-panel row align-items-center'><img class='search-custom-panel-icon mt-5 mb-3' src='https://img.icons8.com/ios/50/000000/search--v1.png'/><span class='col-md-12'>Check your spelling or</span><span class='col-md-12'>add new client</span><button type='button' class='btn btn-light rounded-pill text-success btn-add-client mt-3 mb-5' data-toggle='modal' data-target='#addClient'>Add Client <svg class='ml-2 mb-1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'class='bi bi-plus-circle mr-1 mb-1' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' /><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' /></svg></button></div>");
      }
      $('.no-results').remove();
    }
  })
});