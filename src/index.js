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
            videos:[], // Initially there wouldn't be any call made to the API, 
            selectedVideo:null
        }

        // For now we making the API call here in the constructor only, but it's not a good practice
        YTSearch({key:API_KEY,term:'Lenovo Laptops 8th Generation'},(v)=>{ //data came in the form of array itself :)
            this.setState({
                videos:v,
                selectedVideo:v[0]
            })
        })
    }

    render(){
        return(
            <div className="container">
                <SearchBar onChange={this.changeValue}/>
                <VideoDetail video={this.state.selectedVideo}/> {/* The selected video will be shown, On Every li click we are sending passing back that video to this component on line 46...IDEA*/}
                <VideoList 
                    videos={this.state.videos}
                    // Passing call back all the way to the child, videoListItem. Remember only the Parent fulfills the demands of the child
                    onVideoSelect = {video=>this.setState({selectedVideo:video})} // function passed as props all the way to the video_list_item.js
                    />
            </div>
        ) 
      
    }    
}


ReactDOM.render(<App/>,document.getElementById('root'));