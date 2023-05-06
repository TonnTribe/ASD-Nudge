// var nextPageToken = '';

// function getVideos(){
//     fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCk0fGHsCEzGig-rSzkfCjMw&maxResults=5&order=date&key=AIzaSyDvAZFhaHnHIbzEe8eQwDjbF8sGeva9Dyw&pageToken='+nextPageToken)
//     .then((result)=> {
//         return result.json()
//     }).then((data)=>{
//         var videos = data.items
//         console.log(data.nextPageToken);
//         nextPageToken = data.nextPageToken;
//         var videoContainer = document.querySelector('.youtube-container')
//         for(video of videos){
//             videoContainer.innerHTML += `
//             <h3>${video.snippet.title}</h3>
//             <img src='${video.snippet.thumbnails.default.url}'>
//             `
    
//             // console.log(video.snippet.thumbnails.default.url);
//         }
//     })
//     };
//     getVideos();