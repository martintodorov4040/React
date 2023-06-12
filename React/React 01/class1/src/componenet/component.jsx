import React, { Component } from 'react';

class SongList extends Component {
  state = {
    songs: [
      { id: 1, title: 'Elley Duhé ', artistName: 'Middie of the Night ', duration: '3:06' },
      { id: 2, title: 'Karneval 2 ', artistName: 'Sajfer ', duration: '2:45' },
      { id: 3, title: 'Seen Enis' , artistName: 'SLK ', duration: '3:45' },
      { id: 4, title: 'Ed Sheeran ', artistName: 'Shape of you ', duration: '3:24' },
      { id: 5, title: 'Alis Shuka ', artistName: 'Not About Us ', duration: '4:09' },
    ],
    playlist: [],
  };

  addToPlaylist = (song) => {
    const { playlist } = this.state;
    if (!playlist.find((item) => item.id === song.id)) {
      this.setState({ playlist: [...playlist, song] });
    }
  };

  removeFromPlaylist = (song) => {
    const { playlist } = this.state;
    const updatedPlaylist = playlist.filter((item) => item.id !== song.id);
    this.setState({ playlist: updatedPlaylist });
  };

  render() {
    const { songs, playlist } = this.state;
    return (
      <div style={{backgroundColor: "lightblue", borderStyle: 'solid'}}>
        <h2>Song List</h2>
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.title}
              {song.artistName}
              {song.duration}
              <button style={{backgroundColor: "black", color: "white", width: `40%`, padding: "2%", margin: "2%",  }} onClick={() => this.addToPlaylist(song)}>Add to Playlist</button>
            </li>
          ))}
        </ul>

        <h2>Playlist</h2>
        <ul>
          {playlist.map((song) => (
            <li key={song.id}>
             {song.title}
              {song.artistName}
              {song.duration}
              <button style={{backgroundColor: "black", color: "white", width: `40%`, padding: "2%", margin: "2%" }}onClick={() => this.removeFromPlaylist(song)}>Remove from Playlist</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SongList;
