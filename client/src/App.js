import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {data: {quote:{open:0},code:'wbc'}}
    }


    render() {
        let display = [];
        return (
            <div className="App">
                <Shares data={this.state.data}></Shares>
            </div>
        )
    }
}

export default App;
