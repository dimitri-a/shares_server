import React, {Component} from 'react';
import axios from 'axios';

export default class Shares extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {counter:10,id:0}
   console.log('this.state.counter=',this.state.counter);
    }

    componentDidMount() {
        console.log('shares.js:componentDidMount');
        setInterval(this.getData, 2000)
    }

    // componentWillUnmount() {
    //     clearInterval(this.state.id)
    // }

    getData() {

        //console.log('getData',this.state.counter);

        this.setState({counter:this.state.counter-1});
        // axios.get('http://localhost:3000/api/shares/wbc').then((response) => {
        //     console.log('client.js:axios call',response.data);
        // })
    }

    render() {

        console.log('shares.js : render()');

        return (
            <div className="App">
                {this.state.counter}

            </div>
        )
    }
}
