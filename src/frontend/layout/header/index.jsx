import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        Router App
        <span>
        <NavLink to='/page1'>Page 1</NavLink>
        <NavLink to='/page2'>Page 2</NavLink>
        <NavLink to='/page3'>Page 3</NavLink>
        </span>
      </div>
    );
  }
}

export default Header;

