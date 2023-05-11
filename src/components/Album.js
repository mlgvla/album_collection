import React from 'react'

function Album({albumData}) {
 const {title, artist, year, coverUrl} = albumData
  return (
    <div className="album">
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <img src={coverUrl} alt={`Album cover for ${title}`} />
    </div>
  )
}

export default Album