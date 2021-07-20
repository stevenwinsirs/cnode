import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './nav';
import {indexNavs} from '../routes/index';

function IndexNav(){
  return <Route
    path={['/']}
    exact
    render={()=>{
      return <Nav data={indexNavs}/>;
    }}
  />;
}

export default IndexNav;