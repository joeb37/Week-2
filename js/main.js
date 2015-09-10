requirejs.config({
  "baseUrl" : "js/",
  "paths"   : {
    "jquery" : "vendors/jquery.min",
    "bootstrap" : "vendors/bootstrap.min",
    "Playlist" : "app/Playlist",
    "PlaylistView" : "app/PlaylistView",
    "Song" : "app/Song"
  },
  "shim"    : {
    "bootstrap" : ["jquery"],
  }
});

require(['jquery', 'PlaylistView', 'bootstrap'], function($, PlaylistView){

  $(function(){

    var playlist = new PlaylistView();

  });

});
