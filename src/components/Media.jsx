import React from "react";
import Styles from '../styles/media.css'
import Video from '../assets/video-promo.mp4'
import ReactPlayer from "react-player";
function Media  (){
    return(
        <div className="media-player">
            <ReactPlayer className="react-player" url={Video} controls loop  playing true/>
        </div>
    )
}

export  default Media   