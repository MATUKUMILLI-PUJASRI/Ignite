import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

import './App.css';
function HeartButton() {
    const [liked, setLiked] = useState(false);
  
    function handleHeartClick() {
      setLiked(!liked);
    }
  
    return (
      <button onClick={handleHeartClick}>
        <FontAwesomeIcon icon={faHeart} className={liked ? 'liked' : ''} />
      </button>
    );
  }
function Items()
{
    return( 
    <>
    
    <div1 className="ui cards">
    <div1 className="card">
    <img className="left floated ui image" src={logo1}/>
    <strong>keith Barry's Virtual Valentines Brainhacking Show</strong>
    Mon,Feb 15,2021 2:30 AM IST
    <l><HeartButton/></l>
    <br></br><br></br>
    </div1>

    <div1 className="card" >
    <img className="left floated ui image" src={logo2}/>
    <strong>An evening with kazuo Ishiguro</strong>
    Wed,Mar 3,2021 12:30 AM IST
    <l><HeartButton/></l>
    <br></br>
    </div1>
    <div1 className="card" >
    <img className="left floated ui image" src={logo3}/>
    <strong>Valentines Day Virtual Beer Festival </strong>
    Sun,Feb 14 ,2021 9:30AM IST
    <l><HeartButton/></l>
    <br></br>
    </div1>
    <div1 className="card" >
    <img className="left floated ui image" src={logo4}/>
    <strong>Valentines Day Virtual Beer Festival </strong>
    Sun,Feb 14 ,2021 9:30AM IST
    <l><HeartButton/></l>
    <br></br>
    </div1>
</div1>
</>
    );
};
function compound(){
    return(
    <>
    <Items/>
    </>);

}
export default compound;