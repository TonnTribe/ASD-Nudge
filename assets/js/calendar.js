var floatText = $('floatText');
floatText.text()

$(function () {


function savedData() {
    $('.description').each(function(){
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    });

    savedData()};