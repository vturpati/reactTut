import React from 'react';
//Component is for statefull component 
import{Component} from 'react';


export default class App extends Component{
    //it is like getInitialState
    constructor(props){
        super(props);;
        this.state = {
            data : 0
        }
    };

     componentWillMount(){
            console.log("component Will Mount State");
            return {};
    };

     componentDidMount(){
            console.log("component Did Mount State");
            return {};
    };

    render(){
        return (
        <div>
           <h1> My first react component dynanically</h1><br></br>
            Author : Vivekananda Turpati
        </div>
        );
    }
}



/*
// This is not recommended 
var App = React.createClass({
    render : function(){
         return (
        <div>
           <h1> My first react component  ES5 Class dynanically</h1><br></br>
            Author : Vivekananda Turpati
        </div>
        );
    },
    getInitialState : function(){
            console.log("Intial State");
            return {};
    },
    componentWillMount : function(){
            console.log("component Will Mount State");
            return {};
    },
    componentDidMount : function(){
            console.log("component Did Mount State");
            return {};
    },
     shouldComponentUpdate : function(newProps , newState){
            console.log("Should Component Update State");
            return false;
    },
    componentWillUpdate : function(){
            console.log("component Will Update State");
            return {};
    },
     componentDidUpdate : function(){
            console.log("component Did Update State");
            return {};
    },
    componentWillReceiveProps : function(){
            console.log("component Will ReceiveProps State");
            return {};
    }

});

export default App;
*/


/*
// Stateless components in ES5
var App = function(props){
    return (
        <div><h1> ES5 stateless  Class Component</h1></div>
    );
}
*/


/*
export default App;

// Statetless component in ES2015
const App = (props) => {
    return (
        <div><h1> This is stateless component</h1></div>
    );
}
export default App;
*/









