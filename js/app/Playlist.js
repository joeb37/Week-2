define(['jquery', 'Song'], function ($, Song){

  var Playlist = function(){
    // initialize
    this.playlist = JSON.parse(sessionStorage.getItem('playlist')) || [];
    //this.listenAddSong();

    this.updatePlaylist();

  };

  Playlist.prototype.addSong = function(song){
    var newSong = new Song(song);
//    this.playlist.push(song);
    this.playlist.push(newSong);
    this.updatePlaylist();
  };
  Playlist.prototype.removeSong = function(index){
    this.playlist.splice(index, 1);
    this.updatePlaylist();
  };
  Playlist.prototype.updatePlaylist = function() {
    sessionStorage.setItem('playlist', JSON.stringify(this.playlist));
    //this.updatePlaylistDom();
  };

  return Playlist;
});
