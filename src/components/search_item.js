import React from 'react'

const SearchItem = ({video, onVideoSelect}) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li className="media" onClick={() => onVideoSelect(video)}>
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={imageUrl} alt="{title}" />
        </a>
      </div>
      <div className="media-body">
        <h5 className="media-heading">{snippet.title}</h5>
      </div>
    </li>
  )
}

export default SearchItem;