import './App.css';
import React, { useState } from 'react';
import PopupImg from './component/popup-image';
import Imgitem from './component/img-item';
import { Piciu } from "./component/item-variable";
import Appsearch from './component/app-search';
function App() {
  
  const [popupPic, setpopupPic] = useState(null);
  const [searchtext, setSearchText] = useState("");
  //open popup Picture by click
  const onPicItemClick = (selectedPic) => setpopupPic(selectedPic);
  
  //close popup picture
  const onPopupClose = () => setpopupPic(null);

  const iuFiltering = Piciu.filter((data) => {
    return data.title.includes(searchtext);
  })

  // or another method can write
  // const iuElements = Piciu.filter((data) => {
  //   return data.title.includes(searchtext);
  // }).map((pic, index) => {
  //   return <Imgitem key={index} picwallpaper={pic} onItemClick = {onPicItemClick} />
  // });
  const iuElements = iuFiltering.map((pic, index) => {
    return <Imgitem key={index} picwallpaper={pic} onItemClick = {onPicItemClick} />
  });

  let iuPost = null
  if(!!popupPic) { //  !!null => !not null => null //// !!not null => !null => not null
    iuPost = <PopupImg picwallpaper = {popupPic} onItemClick = {onPopupClose} />
  }
  

  return (
    <div className="app">
      <section className='app-section'>
        <div className="app-container">
          <Appsearch value={searchtext} onTextChange={setSearchText} />
          <div className= "app-grid">  
            {iuElements}
          </div>
        </div>
      </section>
      {iuPost}
    </div>
  );
}

export default App;
