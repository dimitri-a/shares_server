import React, {Component} from 'react';
import axios from 'axios';

export default class Shares extends Component {

    constructor(props){
        super(props);
        this.getData();

        this.state={price:0}
    }

    getData() {

        let { code }  = this.props;
        console.log('getdata on the client',code);
        axios.get('http://localhost:3000/api/shares/' + code).then((response) => {
            console.log('client.js:axios call, result =',response.data);
            this.setState({"price":response.data});
        })
    }

    componentDidMount() {
        console.log('componentdidmount',this.state.currentCount);

        this.intervalId=setInterval( () =>
            {
                this.getData()
            }
            ,30000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        console.log('shares.js : render()');
        console.log(this.state.price);

        return (
            <div className="App container">
                <li className="row">
                    <div className="col-lg-6">
                        code:{this.props.code}
                    </div>
                    <div className="col-lg-6">
                        current price:{this.state.price}
                    </div>
                </li>
            </div>
        )
    }
}
