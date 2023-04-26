var rightNow = dayjs().format('dddd, MMM DD');
var now = dayjs().format('H');
var start = dayjs().endOf('h')
var relativeTime = dayjs.extend(window.dayjs_plugin_relativeTime);

var set = dayjs.extend(relativeTime);

console.log(now);
console.log(rightNow);
console.log(dayjs().from(dayjs('2020-01-01')));

