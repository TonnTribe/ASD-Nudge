var floatText = $('floatText');

floatText.text()

  //Create Button
  var pContainer = $('.lead');
  $("<button class = 'startBtn'> New Word </button>").appendTo(pContainer);
  var fetchData = $('.startBtn')

  //Create a word bank
  var randWordBank = ['style', 'bend', 'brilliance', 'equip', 'part', 'hide', 'passion', 'attract', 'quaint', 'ride'];
  
  function getRandomWord() {
    const apiKey = '5d27aa46-e2c2-4a38-85cb-40d59ba829f5'
    var divContainer = $('.dailyWord')
    
    // empties the children elements and replace with new word/definition
    divContainer.empty();
    var randWordIndex = Math.floor(Math.random() * randWordBank.length);
    var randWord = randWordBank[randWordIndex];
    var requestURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randWord}?key=${apiKey}`;
    
    console.log(randWordBank[randWordIndex])
    $(`<p>Word of the day is <strong>${randWord}</strong><p>`).appendTo(divContainer);
    
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var wordType = data[0].fl;
      var smDef = data[0].shortdef[0];
      // console.log(`Definition of ${randWord} is: \n------------------------`);
      // console.log("(" + data[0].fl + ") " + data[0].shortdef[0])
      $(`<p>(${wordType}) ${smDef}</p>`).appendTo(divContainer);
    });
  }

  fetchData.on('click', getRandomWord);

$(function () {

function savedData() {
    $('.description').each(function(){
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    });

    savedData()};

  });