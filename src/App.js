import "./App.css"
import Album from "./components/Album"
import { albumData } from "./data"

function App() {
   return (
      <div className="App">
         <h1>My Music Album Collection</h1>
         <div className="album-collection">
            <Album albumData={albumData[0]} />
            <Album albumData={albumData[1]} />
            <Album albumData={albumData[2]} />
            <Album albumData={albumData[3]} />
            <Album albumData={albumData[4]} />
         </div>
      </div>
   )
}

export default App
