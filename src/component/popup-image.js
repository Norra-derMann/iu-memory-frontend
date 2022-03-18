import React from 'react';
import './popup-image.css'
const PopupImg = (props) => {
  const { picwallpaper, onItemClick } = props;
  return (
    <div className="pic-post">
        <div className="pic-post-bg" onClick={onItemClick} />
            <div className="pic-post-content"  onClick={onItemClick}>
                <img src={picwallpaper.thumbnailUrl} alt="Logo" />
                <h4>{picwallpaper.title}</h4>
            </div>
    </div>
  );
}

export default PopupImg;
