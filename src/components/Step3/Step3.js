import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        axios.get(`https://api.nps.gov/api/v1/campgrounds?parkCode=${this.props.parkCode}&stateCode=${this.props.chosenState}&limit=1&start=1&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH`)
            .then(res => {
                console.log(res.data);
                
            })

    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}

const mapStateToProps = state => {
    let { parkCode, chosenState } = state.test;
    return {
        parkCode,
        chosenState
    }
}
 
export default connect(mapStateToProps, {})(Step3);