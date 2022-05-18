import React from "react"

class SongForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        songTitle: "",
        songArtist: "",
        songGenre: "",
        songRating: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    } 
  
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
    }

    handleClick(event) {
        event.preventDefault();
        const id = this.props.songs.length + 1;
        const newSong = {
          id: id,
          song: this.state.songTitle,
          artist: this.state.songArtist,
          genre: this.state.songGenre,
          rating: this.state.songRating,
        };
    
        this.props.addSong(newSong);
        this.setState({
          songTitle: "",
          songArtist: "",
          songGenre: "",
          songRating: "",
        });

        console.log(newSong);
    }
  
    render() {

      return (
        <form className="songForm" onSubmit={this.addSong}>
            <input 
                    type="text" 
                    value={this.state.songTitle} 
                    name="songTitle" 
                    placeholder="Song" 
                    onChange={this.handleChange}
                    required
            />
            <input 
                    type="text" 
                    value={this.state.songArtist} 
                    name="songArtist" 
                    placeholder="Artist" 
                    onChange={this.handleChange} 
                    required
            />
            <input 
                    type="text" 
                    value={this.state.songGenre} 
                    name="songGenre" 
                    placeholder="Genre" 
                    onChange={this.handleChange} 
              />
          <select
            onChange={this.handleChange}
            name="songRating"
            value={this.state.songRating}
            placeholder="Rating"
          >
            <option value="" disabled>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
         <button onClick={this.handleClick}>Add Song</button>
        </form>
      );
    }
  }
  
  export default SongForm