import React, { useState } from "react";

import "./slider.css";


import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import {useTranslation} from "react-i18next";
import "../../utils/i18next";

function MainSlider() {
  const {t} = useTranslation();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  function clickHandler(){
    fetch("http://localhost:64169", {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
       action:1
     
      })
    }).then((response) => response.json())
    .then((responseJson) => {

      alert.alert(responseJson);

    }).catch((error) => {
      console.error(error);
    });
}
  return (
    <div>
      <div>
          <h3 className="text-center"> {t("main.platform")}</h3>
      </div>
      <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
        
        <img src="mainPhoto.jpg" ></img>
      </div>
    </div>
  );
}
export default MainSlider;

