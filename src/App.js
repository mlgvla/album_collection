import React from "react"
import "./App.css"
import { albumCollection } from "./data"

import AlbumList from "./components/AlbumList"

function App() {
   return (
      <div className="App">
         <h1>My Music Album Collection</h1>
         <AlbumList albums={albumCollection} />
      </div>
   )
}

export default App
