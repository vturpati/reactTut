import React from 'react'
import SearchItem from './search_item'

const SearchList = (props) => {
  return (
    <ul className="media-list">
      {props.results.map((result) => {
        return <SearchItem onVideoSelect={props.onVideoSelect} video={result} key={result.etag} />
      })}
    </ul>
  )
}


export default SearchList;