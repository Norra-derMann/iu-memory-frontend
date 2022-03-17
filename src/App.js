import './App.css';
import React, { useState } from 'react';
import PopupImg from './component/popup-image';
import Imgitem from './component/img-item';
import { Piciu } from "./component/item-variable";
function App() {
  const [popupPic, setpopupPic] = useState(null);

  let iuPost = null
  if(!!popupPic) { //  !!null => !not null => null //// !!not null => !null => not null
    iuPost = <PopupImg txtDescription= "cute iu" thumbnailUrl = "/images/iu-wallpapers-3.jpg" />
  }
  
  const iuElements = Piciu.map((pic, index) => {
    return <Imgitem key={index} picwallpaper={pic} />
  });

  return (
    <div className="app">
      <div className= "app-grid"> 
        {/* <div className = "iupic-item">
          <img src="/images/iu-wallpapers-2.jpg" onClick={() => setpopupPic(!popupPic)} alt="Logo" />
          <h4>IU-1</h4>
        </div> 
      {iuPost}*/}
      {iuElements}
      </div>
    </div>
  );
}

export default App;
