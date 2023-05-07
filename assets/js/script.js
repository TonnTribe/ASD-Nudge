
var divContainer = $('.youtube-container')
$("<button class = 'startBtn'> Start </button>").appendTo(divContainer);
var fetchData = $('.startBtn')
const apiKeyYT = 'AIzaSyCtTN0CV1arVltgnlqBrCW42qMJd95RdzE';

// Roller Coaster Channel ID
// UCfKNzpStyQAXfyeg0gxZftw
// Engineering Channel ID
// UCk0fGHsCEzGig-rSzkfCjMw
var chID = 'UCfKNzpStyQAXfyeg0gxZftw';
// var start = moment("1:00", "m:ss");
// var seconds = start.minutes() * 60;
// var timerEl = $('.timer')
// var timer = '';
var nextPageToken = '';
// this.interval = setInterval(() => {
//     this.timerDisplay = start.subtract(1, "second").format("m:ss");
//     seconds--;
//     timer = this.timerDisplay;
    
//     if (seconds === 0) clearInterval(this.interval);
//     timerEl.text(timer);
// },1000);

function getVideos(){
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${chID}&maxResults=5&order=date&key=${apiKeyYT}&pageToken=`+nextPageToken)
.then((result)=> {
    return result.json()
}).then((data)=>{
    console.log(data);
    var videos = data.items
    // console.log(data.nextPageToken);
    nextPageToken = data.nextPageToken;
    var videoContainer = document.querySelector('.youtube-container')
    for(video of videos){
        videoContainer.innerHTML += `
        <h5><a href='https://www.youtube.com/watch?v=${video.id.videoId}'>${video.snippet.title}</a></h5>
        <img src='${video.snippet.thumbnails.high.url}'>
        `
        // video.snippet.thumbnails.default.url
        // console.log(video.snippet.thumbnails.default.url);
    }
})
}

fetchData.on('click', getVideos);
// getVideos()

// const apiKey = '5d27aa46-e2c2-4a38-85cb-40d59ba829f5'

// function getDef() {
//     const randWord = 'start';
//     // var sortKey = Math.floor(Math.random() * 199999999);

//     var requestURL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${randWord}?key=${apiKey}`;
//     //Search for "sort" : -string- a 9-digit code which may be used to sort entries in the proper dictionary order if alphabetical display is needed 

//     fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         console.log(`Definition of ${randWord} is: \n------------------------`);
//         console.log("(" + data[0].fl + ") " + data[0].shortdef[0])
//     });
// };

// fetchData.on('click', getDef);
