import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import IntervalComponent from './components/IntervalComponent'
import Clock from './components/Clock'


class App extends Component {

    constructor(props) {
        super();
        this.props = props;
    }


    render() {
        return (
            <div className="App">
                {/*<IntervalComponent></IntervalComponent>*/}
                <Shares code="TLS"></Shares>
                <Shares code="NAB"></Shares>
            </div>
        )
    }
}

export default App;
