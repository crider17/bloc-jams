//document.getElementsByClassName('album-cover-art').addEventListener("click", toggleAlbum);

// Example Album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

// Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

// Another Example Album
var albumPasteur = {
    title: 'Germ Theory',
    artist: 'Louis Pasteur',
    label: 'Bio Records',
    year: '1887',
    albumArtUrl: 'assets/images/album_covers/14.png',
    songs: [
        { title: 'I have the cure', duration: '1:51' },
        { title: 'Its crystal clear', duration: '3:01' },
        { title: 'What spontaneous generation?', duration: '1:21'},
        { title: 'Pasteurization nation', duration: '2:14' },
        { title: 'Gimme the vaccine!', duration: '4:15'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     return template;
 };

 var setCurrentAlbum = function(album) {
     // #1
     //alert(album);
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     // #3
     albumSongList.innerHTML = '';

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
//  var clicked = document.getElementsByClassName('album-cover-art');
//    clicked.addEventListener("click", function(){ alert("here!"); });
  document.getElementsByClassName('album-cover-art').addEventListener('click', function(){ alert("here!"); });
  //document.getElementsByClassName('album-cover-art').addEventListener("wheel", alert("herenow!"));
 };

// var toggleAlbum = function() {
//   alert("here!");
// };

 // var clicked = document.getElementsByClassName('album-cover-art');
 // clicked.addEventListener("click", toggleAlbum);
