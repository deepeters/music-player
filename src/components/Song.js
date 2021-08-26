import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Song = ({currentSong}) => {
    return(
        <div className="song-container">
            <img alt={currentSong.name} src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>

        </div>
    );
};

export default Song;