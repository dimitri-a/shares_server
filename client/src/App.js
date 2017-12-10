import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import IntervalComponent from './components/IntervalComponent'
import Clock from './components/Clock'


class App extends Component {

    constructor(props) {
        super();
        this.props = props;
        //this.state = {data: {quote:{open:0},code:'wbc'}}
    }


    render() {
        return (
            <div className="App">
                {/*<IntervalComponent></IntervalComponent>*/}
                <Shares></Shares>
            </div>
        )
    }
}

export default App;
