import React from "react"
import Player from "./Player"
import { starRating } from "../utility"

function Album({ album, showPlayer = false }) {
   const { title, artist, year, rating, coverUrl, spotifyId } = album

   return (
      <div className="album">
         <h2>{title}</h2>
         <p>{artist}</p>
         <p>{year}</p>
         <p>Rating: {starRating(rating)}</p>

         {showPlayer ? (
            <Player spotifyId={spotifyId} />
         ) : (
            <img src={coverUrl} alt="" />
         )}
      </div>
   )
}

export default Album
