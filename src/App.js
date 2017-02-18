import React, {Component} from 'react';
import './App.css';
import Search from "./Search"

class App extends Component {
    constructor(props){
        super(props);
        this.state={data : new Date()};
    }
    componentDidMount() {
        setInterval(() => this.tick(),1000);
    }
    tick(){
        this.setState({
            data:new Date()
        });
    }
    render() {
        return (
            <div className="App" >
                <h1 className="time">{this.state.data.toLocaleTimeString()}</h1>
                <Search/>
            </div>
        );
    }
}

export default App;
