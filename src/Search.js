import React, {Component} from 'react';
import './App.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.click=this.click.bind(this);
        this.text=this.text.bind(this);
        this.state={search: "null"}
    }
    text(e){
        this.setState({
            search:e.target.value
        })
    }
    click(e){
        let url="https://www.google.com/search?q="+this.state.search;
        window.location=url;
    }
    render() {
        return (
            <div className="App">
                <form>
                    <input onChange={this.text} type="text"  />
                    <input onClick={this.click} type="button" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Search;
