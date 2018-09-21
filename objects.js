var playlist = {'artist names': 'song titles'};

function updatePlaylist ( playlist, name, song){
  return (playlist [name] = song);
}

function removeFromPlaylist (playlist, artistName){
  return (delete playlist.name);
}
