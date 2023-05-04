var currentDay = $('#currentDay');
currentDay.text(dayjs().format('dddd, MMMM, D'));

var currentHour = dayjs().hour()

$(function () {
  for (var i = 7; i < 24; i++) {
    if (currentHour === i) {
      $('#hour-'+ i).children('textarea').addClass('present');
    } else if (currentHour > i) {
      $('#hour-'+ i).children('textarea').addClass('past');
    } else {
      $('#hour-'+ i).children('textarea').addClass('future');
    }
  }

  $('.saveBtn').on('click', function(){
    var parentId = $(this).parent().attr('id')
    var text = $(this).siblings('textarea').val()
    localStorage.setItem(parentId, text)
  })

function savedData() {
  $('.description').each(function(){
    $(this).val(localStorage.getItem($(this).parent().attr('id')))
  })
}
savedData()
});