import React, {useState} from "react";

//Add Styling
import "./styles/app.scss";

//Add Components
import Player from "./components/Player";
import Song from "./components/Song";

//Add Util
import data from "./util"

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
