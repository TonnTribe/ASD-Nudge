var floatText = $('floatText');

floatText.text()

  //Create Button
  var headerContainer = $('header')
  $("<button class = 'startBtn'> Start </button>").appendTo(headerContainer);
  var fetchData = $('.startBtn')
  //Create a word bank
  var randWordBank = ['style', 'bend', 'brilliance', 'equip', 'part', 'hide', 'passion', 'attract', 'quaint', 'ride'];
  
  function getRandomWord() {
    var randWord = Math.floor(Math.random() * randWordBank.length);
    console.log(randWordBank[randWord])
  }

  // console.log(getRandomWord(randWordBank.length))

  fetchData.on('click', getRandomWord);

$(function () {


// function savedData() {
//     $('.description').each(function(){
//       $(this).val(localStorage.getItem($(this).parent().attr('id')))
//     });

//     savedData()};

  });