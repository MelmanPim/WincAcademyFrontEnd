import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import Footer from "./Footer";

class SongOverview extends React.Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [
        { id: 1, song: "Speechless", artist: "Nas", genre: "Rap", rating: 5 },
        { id: 2, song: "Ladders", artist: "Mac Miller", genre: "Rap", rating: 4 },
        { id: 3, song: "The opening", artist: "Wesley Joseph", genre: "Pop", rating: 3 },
        ]
      }
    }

    addSong = (song) => {
        this.setState({
          songs: [...this.state.songs].concat([song]),
        });
    };

    emptyList = () => {
        this.setState({
          songs: [],
        });
      };
  
    render() {
      return (
        <div className="mainContent">
               <SongForm addSong={this.addSong} songs={this.state.songs}/>
                                          <table>
                                <tr className="song-header">  
                                  <th className="song-row__item">Song</th>
                                  <th className="song-row__item">Artist</th>
                                  <th className="song-row__item">Genre</th>
                                  <th className="song-row__item">Rating</th>
                                </tr>
                                  </table>
                <SongList songs={this.state.songs}/>
                <Footer onEmptyClick={this.emptyList}/>
        </div>
      );
    }
  }
  
  export default SongOverview;