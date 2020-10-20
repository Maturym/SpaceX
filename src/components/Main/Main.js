import React from 'react';
import './main.css';
// import logo from '../../logo.svg'

const video = {
  'Falcon 1': 'moon',
  'Falcon 9': 'earth',
  'Falcon Heavy': 'mars',
  'Starship': 'space',
  // other: 'space',
}

 const Main = ({ rocket, name }) =>{
  return(
  <section className="main">
    <h1 className="title">
      {name || rocket}
    </h1>

    {rocket && <div className="video-container">
      <video 
      className="video" 
      autoPlay loop muted 
      src={`./video/${video[rocket]}.mp4`}>
      {/* // src={`./video/${video.hasOwnProperty(rocket) ? 
      //   video[rocket] :
      //   video.other}.mp4`}> */}

      </video>

    </div>}
  </section>
 )};
 export default Main;