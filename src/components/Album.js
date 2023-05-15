import React from "react"
import { starRating } from "../utility"

function Album(props) {
   return (
      <div className="album">
         {/* <h2>{props.title}</h2>
         <p>{props.artist}</p>
         <p>{props.year}</p>
         <p>Rating: {starRating(props.rating)}</p>
         <img src={props.coverUrl} alt={`Album cover for ${props.title}`} /> */}
      </div>
   )
}

export default Album
