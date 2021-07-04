console.log("hello!")
console.log(fetch("https://tracklist.webdevnik.com/api/v1/songs?perPage=25&page=1&sortBy=created_at&descending=true").then(res => console.log(res)));
