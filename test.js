// const fetch = require("node-fetch");
// const api_url= 'https://tracklist.webdevnik.com/api/v1/songs?perPage=25&page=1&sortBy=created_at&descending=true'
// mafutinEl(api_url);
// async function mafutinEl(api_url){
//     const response = await fetch(api_url, {mode:'no-cors'}).then(response => response.json()).then(data => console.log(data));
//     //const data = await response.json()
//    console.log('ma fut in cacatul asta de limbaj');
// }

function currentSongs () {
    const songInfo = document.querySelector('#currentSong')
    const albumCover = document.querySelector('#cover')
    let content
    $.getJSON('https://tracklist.webdevnik.com/api/v1/songs?perPage=25&page=1&sortBy=created_at&descending=true', function (data) {
    //   content = `<ul>
    //   <li class="artist">${data.data[0]['track']['artist']}</li>
    //   <li class="songTitle">${data.data[0]['track']['title']}</li>
    //   </ul>`
    //   albumCover.src = `${data.data[0]['track']['imageurl']}`
      songInfo.innerHTML = content
    })
    console.log(content);
  }