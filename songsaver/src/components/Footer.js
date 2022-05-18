import React from "react";

function Footer({onEmptyClick}) {
    return (
        <div className="footer">
            <button className="removeListButton" onClick={onEmptyClick}>Delete all songs</button>
        </div>
    );
}
  
export default Footer;
