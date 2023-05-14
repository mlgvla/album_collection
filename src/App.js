import "./App.css"
import Album from "./components/Album"
import Player from "./components/Player"
import { albumData } from "./data"

function App() {
   return (
      <div className="App">
         <h1>My Music Album Collection</h1>
         <div className="albums">
            <Album albumData={albumData[0]} />
            <Album albumData={albumData[1]} />
            <Album albumData={albumData[2]} />
            <Album albumData={albumData[3]} />
            <Album albumData={albumData[4]} />
            <Album albumData={albumData[5]} />
         </div>
        <Player spotifyId={albumData[0].spotifyId}/>
      </div>
   )
}

export default App
