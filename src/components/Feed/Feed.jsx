import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Feed.css";

const Feed = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/kontakt');
  };

  return (
    <div className="feed-wrapper">
      <p>Prati nas</p>
      <div className="feed-container">
        <iframe className="feed-box" src="https://www.instagram.com/pekarasito/embed" width="340" height="420"></iframe>    
        <iframe className="feed-box" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpekarasito&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="336" height="417" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe className="feed-box" src="https://www.instagram.com/sitocakesandcatering/embed" width="340" height="420"></iframe>    
      </div>
      <div className="feed-contact">
        <p>Želiš catering? Imaš pitanje?</p>
        <button className="feed-contact-button" onClick={handleClick}>Kontaktiraj nas</button>
      </div>
    </div>
  );
};

export default Feed;
