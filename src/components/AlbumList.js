import React from "react"
import Album from "./Album"

function AlbumList({ albums }) {
   const albumList = albums.map((album, index) => (
      <Album key={index} album={album} />
   ))

   return <div className="albums">{albumList}</div>
}

export default AlbumList
