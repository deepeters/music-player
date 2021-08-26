import React, {useState} from "react";

//Add Styling
import "./styles/app.scss";

//Add Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Add Util
import data from "./util"

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
