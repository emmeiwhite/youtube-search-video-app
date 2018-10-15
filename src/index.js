// Here is the react component, probably the Root Componet in this case.
// We always create one Component per file... No matter how small the Component!!!

// YOUTUBE API KEY: AIzaSyAGJmD1kXSd5CYpWNP88fn61HokH-1IpSk
// Package Needed:  " youtube-api-search "


import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAGJmD1kXSd5CYpWNP88fn61HokH-1IpSk';

class App extends Component{
    render(){
        return <SearchBar onChange={this.changeValue}/>
    }    
}


ReactDOM.render(<App/>,document.getElementById('root'));