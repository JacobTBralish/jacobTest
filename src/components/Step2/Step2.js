import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setParks, setParkCode } from '../../redux/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Step2 extends Component {
    componentDidMount() {
        console.log(this.props.chosenState);
        
        axios.get(`https://api.nps.gov/api/v1/parks?stateCode=${this.props.chosenState}&limit=350&start=1&fields=images&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH`)
            .then(res => {
                console.log(res.data.data);
                return this.props.setParks(res.data.data)
                
            });
    }
    render() { 
        let { parks, setParkCode } = this.props;
        console.log(parks);

        let mappedParks = parks.map(park => {
            console.log(parks);
            
            return <button onClick={() => setParkCode(park.parkCode)}>{park.parkCode}</button>
        })
        
        return ( 
            <div>
                Step2
                <Link to='/step3'>Next</Link>
                {mappedParks}
            </div>
         );
    }
}

const mapStateToProps = state => {
    console.log(state.test.chosenState);
    
    let { chosenState, parks } = state.test;

    return {
        chosenState,
        parks
    }
}
 
export default connect(mapStateToProps, {setParks, setParkCode})(Step2);