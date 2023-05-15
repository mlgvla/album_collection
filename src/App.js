import React from "react"
import "./App.css"

const title = "Abbey Road"
const artist = "The Beatles"

function App() {
   return (
      <div className="App">
         <h1>My Music Album Collection</h1>
         <div className="albums">
            <Album />
         </div>
      </div>
   )
}

function Album() {
   return (
      <div className="album">
         <h2>{title}</h2>
         <p>{artist}</p>
      </div>
   )
}

export default App
