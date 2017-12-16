import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import IntervalComponent from './components/IntervalComponent'
import Clock from './components/Clock'
import axios from 'axios';


class App extends Component {

    constructor(props) {
        super();
        this.props = props;

        //todo remove this
        console.log('app.js(client) sending email?? call sayhello');
        //axios.get('http://localhost:3001/sayHello/email').then((response) => {
          
        //})
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
