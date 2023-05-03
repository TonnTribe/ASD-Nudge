$(function () {
    var timeDisplayEl = $('#currentDay');
    var rightNow = dayjs().format('dddd, MMM DD');
    var now = dayjs().format('H');
    var containerEl = $('.container-fluid');

    var wkHrs = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    var timeSlot = $('.timeSlot');
    timeDisplayEl.text(rightNow);


    timeSlot.on('click', '.saveBtn', function (event){
        var desc = $(this).siblings('.description').val();
        var uid = $(this).parent().attr('id');

        localStorage.setItem(uid + "task", JSON.stringify(desc));
        localStorage.setItem(uid, JSON.stringify(uid));

        $('.storUpdate').fadeIn().fadeOut(8000);
        // const currTask = localStorage.getItem(uid + 'task');
    })
    
    $.each(wkHrs, function (i, hours) {
        var hour = 'hour-' + hours; 
        containerEl.append('<div id="'+ hour +'" class="row time-block past"></div>');
    });

    $.each(wkHrs, function (j, hours) {
        var hour = 'hour-' + hours;
        var abbr = '';
        var childEl = $('#'+ hour);


        if (hours < 12) {
            abbr = 'AM'
        } else {
            abbr = 'PM'
        }

        if (now < hours) {
            childEl.attr('class', 'row time-block future')
        } else if (now > hours) {
            childEl.attr('class', 'row time-block past')
        } else if (now == hours) {
            childEl.attr('class', 'row time-block present')
        } else {
            console.log('Did Not Find')
        }

        childEl.append('<div class="col-2 col-md-1 hour text-center py-3">'+ hours + abbr +'</div>');
        childEl.append('<textarea class="col-8 col-md-10 description" rows="3"> </textarea>');
        childEl.append('<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>');
        

    });

  });