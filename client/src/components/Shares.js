import React, {Component} from 'react';
import axios from 'axios';

export default class Shares extends Component {

    constructor(){
        super();
        this.getData();
    }

    getData() {
        console.log('getdata on the client');
        axios.get('http://localhost:3000/api/shares/wbc').then((response) => {
            console.log('client.js:axios call, result =',response.data);
        })
    }

    render() {
        console.log('shares.js : render()');

        return (
            <div className="App">


            </div>
        )
    }
}
