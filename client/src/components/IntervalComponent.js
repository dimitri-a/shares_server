import React, {Component} from 'react';

//todo this is working
export default class IntervalComponent extends Component {

    constructor(props){
        console.log('constructor');
        super(props);
        this.state = {currentCount: 10}
    }

    timer() {
        console.log('timer',this.state.currentCount);
        this.setState({
            currentCount: this.state.currentCount - 1
        })
        if(this.state.currentCount < 1) {
            clearInterval(this.intervalId);
        }
    }
    //use ES6!!!!
    componentDidMount() {
        setInterval(()=>{
            this.timer();
        },2000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {
        return(
            <div>{this.state.currentCount}</div>
        );
    }

}
