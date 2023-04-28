var start = moment("1:00", "m:ss");
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


