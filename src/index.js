// Here is the react component, probably the Root Componet in this case.
// We always create one Component per file... No matter how small the Component!!!

// YOUTUBE API KEY: AIzaSyAGJmD1kXSd5CYpWNP88fn61HokH-1IpSk
// Package Needed:  " youtube-api-search "


import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAGJmD1kXSd5CYpWNP88fn61HokH-1IpSk';



class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos:[] // Initially there wouldn't be any call made to the API
        }

        // For now we making the API call here in the constructor only, but it's not a good practice
        YTSearch({key:API_KEY,term:'Lenovo Laptops 8th Generation'},(videos)=>{ //data came in the form of array itself :)
            this.setState({videos})
        })
    }

    render(){
        return(
            <React.Fragment>
                <SearchBar onChange={this.changeValue}/>
                <VideoDetail video={this.state.videos[1]}/>
                <VideoList videos={this.state.videos}/>
            </React.Fragment>
        ) 
      
    }    
}


ReactDOM.render(<App/>,document.getElementById('root'));