import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubNav from '../SubNav/SubNav.js';

import {
  Link as ScrollLink,
  DirectLink,
  Events,
  animateScroll as scroll,
  scrollSpy
} from 'react-scroll';


  render() {
    return(
      <div className="subnav-wrapper">
        <ul className="subnav-list">
          {this.state.subNav.map((x, i) =>
          <SubNav key={i} name={x}/>)}
        </ul>
      </div>
    )
  }
}

export default SubNav;
