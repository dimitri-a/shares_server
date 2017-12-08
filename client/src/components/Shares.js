import React, {Component} from 'react';
import axios from 'axios';

export default class Shares extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {data: {quote:{open:0}}}
    }

    componentDidMount() {
        console.log(this.props);

        setTimeout(
            axios.get('http://localhost:3000/api/shares/'+this.props.data.code).then((response) => {
                console.log('succes',response.data);
                this.setState({data: response.data});
            })
            ,10000)

    }

    render() {

        return (
            <div className="App">
                <ul>
                    <li> Code</li>
                    <li> Opening price</li>
                </ul>

            </div>
        )
    }
}
