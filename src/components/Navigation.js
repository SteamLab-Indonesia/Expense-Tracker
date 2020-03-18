import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SplashScreen from './SplashScreen';
import {ExpenseTracker} from '../ExpenseTracker';

export const Navigation = () => {
        console.log('Render Navigation');
        return (
                <Switch>
                    <Route exact path="/" component={SplashScreen} />
                    <Route path='/expensetracker' component={ExpenseTracker}/>
                </Switch>
        );
}   