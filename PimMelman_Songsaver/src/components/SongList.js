import React from "react";
import ListItem from "./ListItem";

class SongList extends React.Component {
    render() {
        return (
          <div>
            <ul className="song-list">
              {this.props.songs.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                />
              ))}
            </ul>


    
          </div>
        );
      }

}

export default SongList