var divContainer = $('.youtube-container')
$("<button class = 'startBtn'> Start </button>").appendTo(divContainer);
var fetchData = $('.startBtn')
const apiKeyYT = 'AIzaSyCtTN0CV1arVltgnlqBrCW42qMJd95RdzE';

/*
Channel Options
--------------------------
1. Roller Coaster Channel ID
UCfKNzpStyQAXfyeg0gxZftw

2. Engineering Channel ID
UCk0fGHsCEzGig-rSzkfCjMw

3. Gaming (Possibly FortNite)
UCLy01oVLarj7RNQm52jnGKw
*/
var chID = 'UCLy01oVLarj7RNQm52jnGKw';

/* 
Used to populate another list of channels.
Appends to the end of the url.
*/
var nextPageToken = '';

function getVideos(){
fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${chID}&maxResults=5&order=date&key=${apiKeyYT}&pageToken=`+nextPageToken)
.then((result)=> {
    return result.json()
}).then((data)=>{
    // console.log(data);
    var videos = data.items
    // console.log(data.nextPageToken);
    nextPageToken = data.nextPageToken;
    var videoContainer = document.querySelector('.youtube-container')
    for(video of videos){
        videoContainer.innerHTML += `
        <h5><a href='https://www.youtube.com/watch?v=${video.id.videoId}'>${video.snippet.title}</a></h5>
        <img src='${video.snippet.thumbnails.high.url}'>
        `
    }
})
}

fetchData.on('click', getVideos);