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

var start = moment("5:00", "m:ss");
var seconds = start.minutes() * 60;
var timerEl = $('.timer')
var timer = '';

this.interval = setInterval(() => {
    this.timerDisplay = start.subtract(1, "second").format("m:ss");
    seconds--;
    timer = this.timerDisplay;
    
    if (seconds === 0) clearInterval(this.interval);
    timerEl.text(timer);
},1000);
