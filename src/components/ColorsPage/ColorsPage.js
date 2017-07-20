import React from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import Nav from '../Nav/Nav.js';
import SubNav from '../SubNav/SubNav.js';
import Color from '../Color/Color.js';
import Header from '../Header/Header.js';

var Element = Scroll.Element;

class ColorsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      primary: [
        '#69BE28','#005C84','#FFFFFF'
      ],
      secondary: [
        '#0075B0','#3F9C35','#009FDA'
      ],
      greyscale: [
        '#000000','#5D5D5D','#777777','#999999','#CCCCCC','#E6E6E6','#F2F2F2'
      ],
      other: [
        '#EF4036','#FF9C1B','#FFFCE4'
      ],
      background: [
        '#57C3C9','#88D5D9','#C3EBEC','#E5F6F7'
      ],
      subNav: [
        'primary', 'secondary', 'greyscale', 'other', 'background'
      ]
    }
  }

  render() {
    return(
        <div>
          <Header title="Colors" />
          <div className="content">
            <div className="row-flex">
              <div className="column-left">
                <p>The colours specified below should be used for all S2B user interfaces. It’s important to understand  how the colour system works in a multi product environment. It’s also very important to adhere to the accessibility guidelines.</p>
                <Element name="primary">
                  <section className="pt-20">
                    <div className="row">
                      <h2>Primary Colour</h2>
                      <p>Main colours based on the theme</p>
                    </div>
                    <div className="row-flex">
                      {this.state.primary.map((x, i) =>
                      <Color key={i} label={x} />)}
                    </div>
                  </section>
                </Element>

                <Element name="secondary">
                  <section>
                    <div className="row">
                      <h2>Secondary Colour</h2>
                      <p>Derived from the Primary colours, mostly used as hilighters, links, focus line…</p>
                    </div>
                    <div className="row-flex">
                      {this.state.secondary.map((x, i) =>
                      <Color key={i} label={x} />)}
                    </div>
                  </section>
                </Element>

                <Element name="greyscale">
                  <section>
                    <div className="row">
                      <h2>Greyscale Colour</h2>
                      <p>Greyscale values for body texts, shadows, static content, etc…</p>
                    </div>
                    <div className="row-flex">
                      {this.state.greyscale.map((x, i) =>
                      <Color key={i} label={x} />)}
                    </div>
                  </section>
                </Element>

                <Element name="other">
                  <section>
                    <div className="row">
                      <h2>Other Colour</h2>
                      <p>Mainly used for labels, guidance recovery messages, priority items…</p>
                    </div>
                    <div className="row-flex">
                      {this.state.other.map((x, i) =>
                      <Color key={i} label={x} />)}
                    </div>
                  </section>
                </Element>

                <Element name="background">
                  <section>
                    <div className="row">
                      <h2>Background Colour</h2>
                      <p>Background color for application</p>
                    </div>
                    <div className="row-flex">
                      {this.state.background.map((x, i) =>
                      <Color key={i} label={x} />)}
                    </div>
                  </section>
                </Element>
              </div>
              <div className="column-right pt-50">
                <div className="subnav-wrapper">
                  <ul className="subnav-list">
                    {this.state.subNav.map((x, i) =>
                    <SubNav key={i} name={x}/>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  }
}


export default ColorsPage;
