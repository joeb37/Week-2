define(['jquery', 'Playlist'], function ($, Playlist){

 // DOM functions stay here

  var PlaylistView = function(){
    // initialize
    this.playlist = new Playlist();
    this.listenAddSong();
    this.playlist.updatePlaylist();
    this.updatePlaylistDom();
  };

  PlaylistView.prototype.listenAddSong = function(){
    var that = this;
    $('#addSongForm').on('submit', function(event){
      that.playlist.addSong($('#song').val());
      that.updatePlaylistDom();
      $('#song').val('');

      return false;
    });
  };

  PlaylistView.prototype.updatePlaylistDom = function(){
    var that = this;
    var playlistDom = this.playlist.playlist.map(function(song, index){
      var removeButton = document.createElement("button");
      removeButton.appendChild(document.createTextNode("remove"));
      $(removeButton).click(function(){
        that.playlist.removeSong(index);
        that.updatePlaylistDom();
      });
      $(removeButton).addClass("btn");

      var li = document.createElement('li');
      li.appendChild(document.createTextNode(song.title));
      li.appendChild(removeButton);
      return li;
    });

    $('#currentPlaylist').html(playlistDom);

  };

  return PlaylistView;
});
