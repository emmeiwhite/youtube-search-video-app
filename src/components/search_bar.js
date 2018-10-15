import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        // state is an object which holds the data of our component
        this.state = {
            term:''
        }
    }
    render(){
        // Controlled Component : I guess better term is Controlled Input in this case.
        // I learned that Controlled Component is one, which takes its data from the parent 
        // and doesn't have it's own state. Mosh taught that... Now Stephen Grider is teaching 
        // 'A component in which the input value depends on the state' is Controlled Component.
        // Both are great Mentors, I however go with Mosh Hamedani's Definition !!!
        return (
            <div>
                <input 
                    value={this.state.term} 
                    onChange={event=>this.setState({term:event.target.value})}/>
                Current Value is : {this.state.term}
            </div>
        ) 
    }
}

export default SearchBar;