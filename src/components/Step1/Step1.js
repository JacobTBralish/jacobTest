import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseState } from '../../redux/reducer';
import { Link } from 'react-router-dom';

class Step1 extends Component {


    render() { 
        let { states, chooseState } = this.props
        let mappedStates = states.map(item => {
            return <option value={item}>{item}</option>
        })
        return ( 
            <div>
            <select onChange={(event) => chooseState(event.target.value)}>
              {mappedStates}
                </select>
                <Link to='/step2'>Next</Link>
                </div>
            
        );
    }
}

const mapStateToProps = state => {
    let { states} = state.test;

    return {
        states
    }
}

 
export default connect(mapStateToProps, {chooseState})(Step1);