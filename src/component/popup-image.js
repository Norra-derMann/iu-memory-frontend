import React from 'react';
import './popup-image.css'
const PopupImg = (props) => {
  const {txtDescription, thumbnailUrl} = props;
  return (
    <div className="pic-post">
        <div className="pic-post-bg">
            <div className="pic-post-content">
                <img src={thumbnailUrl} alt="Logo" />
                <h4>{txtDescription}</h4>
            </div>
      </div>
    </div>
  );
}

export default PopupImg;
