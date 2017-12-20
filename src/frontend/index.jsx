import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes from './routes/all_routes'

class Frontend extends Component{
  render(){
    return(
      <Router>
        <AllRoutes/>
      </Router>
    );
  }
}
export default Frontend;