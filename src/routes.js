import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';

export default (
    <Switch>
        <Route exact path='/step2' component={Step2} />
        <Route exact path='/step3' component={Step3} />
        <Route path='/' component={Step1} />
    </Switch>
)