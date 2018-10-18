import React from 'react';

class SearchBar extends React.Component{
    render(){
        // Controlled Component : I guess better term is Controlled Input in this case.
        // I learned that Controlled Component is one, which takes its data from the parent 
        // and doesn't have it's own state. Mosh taught that... Now Stephen Grider is teaching 
        // 'A component in which the input value depends on the state' is Controlled Component.
        // Both are great Mentors, I however go with Mosh Hamedani's Definition !!!
        return (
            <div className="search-bar col-md-12">
                <input
                    onChange={(event)=>this.props.onSearchTermChange(event.target.value)}
                    placeholder="Enter term to search"/>
            </div>
        ) 
    }
}

export default SearchBar;