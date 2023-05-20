import React from "react"
import "./App.css"

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
         <h2>{"Title"}</h2>
         {/* <p>{"Artist"}</p>
         <p>{"Year"}</p>
         <p>Rating: {"Rating"}</p>
         <img src={"CoverUrl"} alt="" /> */}
      </div>
   )
}

export default App
