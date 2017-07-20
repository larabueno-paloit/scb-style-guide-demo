import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Link as ScrollLink,
  DirectLink,
  Events,
  animateScroll as scroll,
  scrollSpy
} from 'react-scroll';

const Wrapper = styled.div`
  padding: 25px 0 25px 16px;
`

const MenuList = styled.ul`
  list-style-type: none;
  text-align: left;

  li {
    margin-bottom: 20px;
    padding-left: 10px;

    &.active {
      border-left: solid 1px #199fd6;
    }
    &:hover {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #5d5d5d;
    }
  }
`

class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return(
      <li><ScrollLink activeClass="active" className={this.props.name} to={this.props.name} spy={true} smooth={true} duration={500} >{this.props.name}</ScrollLink></li>
    )
  }
}

export default SubNav;
