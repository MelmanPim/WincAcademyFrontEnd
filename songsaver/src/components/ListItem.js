import React from "react";

function ListItem({ item }) {
    return (
        <div>

    <table style={{width: "100%"}}>
        <tr key={item.id}
            className="list-item"
            value={item.title}>  
                <td>{item.song}</td>
                <td>{item.artist}</td>
                <td>{item.genre}</td>
                <td>{item.rating}</td>
        </tr>
    </table>

</div>
    );
  }
  
  export default ListItem;
