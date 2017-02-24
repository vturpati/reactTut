import React,{Component} from 'react';
import SearchComponent from './search_component';
import SearchList from './search_list';
import Youtube from 'youtube-api-search';

export default class SearchApp extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }

    search=(term) => {
        Youtube({
            key : 'AIzaSyAcQ7tGKYkP6PODVjMlFyjiwAoZSJ4g8ns',
            term : term
        }, (searchResponse) => {
            this.setState({
                items : searchResponse
            })
        });
    }

    render(){
      //const searchTerm = this.search(term);
      return (
          <div>
              {/* hi vivek  <SearchList results={this.state.items} /> */}
              <SearchComponent onSearchTermChange={this.search} />
              { console.log(this.state.items) } 
              <SearchList results={this.state.items} />
          </div>
      )
    }
}