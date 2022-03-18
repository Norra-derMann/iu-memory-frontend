import './App.css';
import React, { useState } from 'react';
import PopupImg from './component/popup-image';
import Imgitem from './component/img-item';
import { Piciu } from "./component/item-variable";
function App() {
  
  const [popupPic, setpopupPic] = useState(null);

  function onPicItemClick  (selectedPic) { 
    setpopupPic(selectedPic);
  }

  const onPopupClose = () => setpopupPic(null);

  const iuElements = Piciu.map((pic, index) => {
    return <Imgitem key={index} picwallpaper={pic} onItemClick = {onPicItemClick} />
  });

  let iuPost = null
  if(!!popupPic) { //  !!null => !not null => null //// !!not null => !null => not null
    iuPost = <PopupImg picwallpaper = {popupPic} onItemClick = {onPopupClose} />
  }
  

  return (
    <div className="app">
      <div className= "app-grid">  
        {iuElements}
      </div>
      {iuPost}
    </div>
  );
}

export default App;
