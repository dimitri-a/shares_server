import React ,{Component} from 'react';

export default class Clock extends Component
{
    constructor(props) {
        super();
        this.state = {currentCount: 10};
    }

    componentDidMount() {
       setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    timer() {
        this.setState({currentCount:this.state.currentCount+1});
    }

    render() {
        var displayCount = this.state.currentCount--;
        return (
            <section>
                {displayCount}
            </section>
        );
    }
}