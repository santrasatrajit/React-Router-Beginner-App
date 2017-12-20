import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Page1 from '../layout/header/components/page1'
import Page2 from '../layout/header/components/page2'
import Page3 from '../layout/header/components/page3'
import WelcomePage from '../layout/welcome_page'
import Header from '../layout/header/index'

class AllRoutes extends Component {
  constructor(props){
    super();
  }

  render(){
    return(
      <div>
        <Header/>
        <Route exact path="/" component = {WelcomePage}/>
        <Route path="/page1" component= {Page1}/>
        <Route path = "/page2" component = {Page2}/>
        <Route path="/page3" component= {Page3}/>
      </div>
    );
  }
}

export default AllRoutes;