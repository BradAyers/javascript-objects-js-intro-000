var playlist = {"KISS": "Beth"};

function updatePlaylist(object, newArtist, newSong) {
  //var newPlaylist = Object.assign({}, object, {[newArtist]: newSong});
  return Object.assign(object, {[newArtist]: newSong});
};

function removeFromPlaylist(object, artist) {
  delete object.artist;
  return object;
}
