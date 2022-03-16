import './App.css';
import React, { useState } from 'react';
import PopupImg from './component/popup-image';
function App() {
  const [popupPic, setpopupPic] = useState(null);

  let iuPost = null
  if(!!popupPic) { //  !!null => !not null => null //// !!not null => !null => not null
    iuPost = <PopupImg txtDescription= "cute iu" thumbnailUrl = "/images/iu-wallpapers-3.jpg" />
  }
  
  return (
    <div className="app">
      <div className= "app-grid"> 
        <img className= "img-iu" src="/images/iu-wallpapers-5.jpg" onClick={() => setpopupPic(!popupPic)} alt="Logo" />
      </div>
      {iuPost}
    </div>
  );
}

export default App;
