//define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    ;
    return album;
}
//calling three functions & creating 3 variables with different values
var album1 = make_album("darakhshan", "album title 1");
var album2 = make_album("usama", "album title 2");
var album3 = make_album("zain", "album title 3", 10);
//printing value of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
