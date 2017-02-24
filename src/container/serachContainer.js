import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import searchData from '../actions/index';
import SearchComponent from '../components/search_component';
import SearchList from '../components/search_list';
import SearchItem from '../components/search_item';
import SearchDetail from'../components/search_details';

class SearchContainer extends Component {

    constructor(props){
        super(props);
        this.state = {selectedVideo : null};
    }

    search(term){
        this.props.searchData(term);
    }

    componentDidMount(){
        this.search('srk');
    }

    onVideoSelect(selectedVideo){
        this.setState({selectedVideo : selectedVideo});
    }

    componentWillReceiveProps(nextProps){
        this.setState({selectedVideo : nextProps.selectedVideo});
    }

    render(){
        return (
        <div className="containe-fluid">
            <div className="row">
                <div className="col-md-12">
                    <SearchComponent onSearchTerm={this.search.bind(this)} />
                </div>
            </div>
            <div className="row">
                 <div className="col-md-8">
                    <SearchDetail video={this.state.selectedVideo} />
                </div>
                <div className="col-md-4">
                    <SearchList results={this.props.results} 
                    onVideoSelect={
                                (selectedVideo) => {
                                    this.onVideoSelect(selectedVideo)
                                    }
                            }
                    />
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        results : state.results,
        selectedVideo : state.results[0]
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);

/*
mapStateToProps : is trigrred when there is change in state properties 

mapDispatchToProps : is trigrred when state properties


 */
