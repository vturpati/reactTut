import React from 'react';

export default class SearchComponent extends React.Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="search"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.props.onSearchTerm(this.refs.search.value)}>Search!</button>
        </span>
      </div>
    )
  }
}