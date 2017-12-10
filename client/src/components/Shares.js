import React, {Component} from 'react';
import axios from 'axios';

export default class Shares extends Component {

    constructor(props){
        super(props);
        this.getData();

        this.state={price:0}
    }

    getData() {

        let { code }  = this.props.code;
        console.log('getdata on the client');
        axios.get('http://localhost:3000/api/shares/' + code).then((response) => {
            console.log('client.js:axios call, result =',response.data);
            this.setState({"price":response.data});
        })
    }

    render() {
        console.log('shares.js : render()');
        console.log(this.state.price);

        return (
            <div className="App">
                {this.state.price}

            </div>
        )
    }
}
