import React from "react"
import { starRating } from "../utility"

function Album({ albumData }) {
   const { title, artist, year, coverUrl, rating } = albumData
   return (
      <div className="album">
         <h2>{title}</h2>
         <p>{artist}</p>
         <p>{year}</p>
         <p>Rating: {starRating(rating)}</p>
         <img
            src={coverUrl}
            alt={`Album cover for ${title}`}
            width="300"
            height="300"
         />
      </div>
   )
}

export default Album
