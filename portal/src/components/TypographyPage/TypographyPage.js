import React from 'react';
import Scroll from 'react-scroll';
import Nav from '../Nav/Nav.js';
import SubNav from '../SubNav/SubNav.js';
import Header from '../Header/Header.js';
import style from './StickyNav.css';

import styled from 'styled-components';

var Element = Scroll.Element;

const Divider = styled.div`
  border-top: 1px dashed #ccc;
  text-align: right;
  padding-top: 10px;
  color: #69be28;
  margin-top: 20px;
  font-size: 12px;

  span {
    cursor: pointer;
  }
`

const HeaderWrapper = styled.div`
  text-align: left;
  padding-bottom: 30px;
`

const ColoredBox = styled.div`
  width: 41px;
  height: 41px;
  margin-right: 10px;

  &.blue {
    background-color: #005c84;
  }

  &.white {
    background-color: #fff;
  }

  &.grey {
    background-color: #777;
  }
`

const BoldH2 = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const BoldH3 = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const RegularH4 = styled.div`
  font-size: 12px;
`

const RegularH5 = styled.div`
  font-size: 12px;
`

class TypographyPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      items: [
        'Search','Menu','Options', 'Close', 'Dropdown', 'Expand', 'Favourite','Favourite filled', 'Unchecked box',
        'Check all', 'Check box', 'Preview', 'icon id', 'Doc uploaded', 'icon id', 'Word file', 'Excel File', 'Document',
        'PDF file', 'icon id', 'Import', 'icon id', 'Export', 'icon id'
      ],
      subNav: [
        'brand', 'headers'
      ]
    }
  }

  componentDidMount () {
    this._bindScroll()
  }

  componentWillUnmount () {
    this._unbindScroll()
  }

  _bindScroll = () => {
    window.addEventListener(
     'scroll',
     this._handleScroll
   )
  }

  _unbindScroll = () => {
    window.removeEventListener('scroll', this._handleScroll)
  }

  _handleScroll = () => {

    const top = document.documentElement.scrollTop
     || document.body.parentNode.scrollTop
     || document.body.scrollTop

     console.log(top);
    // Test < 1 since Safari's rebound effect scrolls past the top
    // if (top < 1) {
    //
    //   const className = `stickyNav`
    //   this._header.className = className
    // }
    // else if(top > 150 ){
    //
    //   const className = `stickyNav scrolled`
    //   this._header.className = className
    // }
    if (top > 125) {
      const className = `stickyNav scrolled`
      this._header.className = className
    }
    else if (top < 125){
      const className = `stickyNav`
      this._header.className = className
    }
  }
  render() {
    return(
        <div>
          <Header title="Typography" />
          <div className="content">
            <div className="row-flex">
              <div className="column-left">
                <p>The typography system follow the brand font (SC sans) taillored for the project and context of use.</p>
                <Element name="brand">
                  <section className="pt-40">
                      <h3>SC Sans</h3>
                      <p>Sample Text</p>
                      <h2>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h2>
                      <h2>abcdefghijklmnopqrstuvwxyz</h2>
                      <h2>0123456789!@#$%^&*()</h2>
                      <Divider>
                        <span>Show Code</span>
                      </Divider>
                    </section>
                </Element>
                <Element name="headers">
                  <section>
                    <HeaderWrapper>
                      <h3>Headers</h3>
                      <p>H1 - Light - 20px</p>
                      <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                        <ColoredBox className="white" />
                      </div>
                    </HeaderWrapper>

                    <HeaderWrapper>
                      <p>H2 - Bold - 14px</p>
                      <BoldH2>ABCDEFGHIJKLMNOPQRSTUVWXYZ</BoldH2>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                        <ColoredBox className="white" />
                      </div>
                    </HeaderWrapper>

                    <HeaderWrapper>
                      <p>H2 - Bold - 14px</p>
                      <BoldH2>ABCDEFGHIJKLMNOPQRSTUVWXYZ</BoldH2>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                      </div>
                    </HeaderWrapper>

                    <HeaderWrapper>
                      <p>H3 - Bold - 12px</p>
                      <BoldH3>ABCDEFGHIJKLMNOPQRSTUVWXYZ</BoldH3>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                        <ColoredBox className="grey" />
                      </div>
                    </HeaderWrapper>

                    <HeaderWrapper>
                      <p>H4 - Regular - 12px</p>
                      <RegularH4>ABCDEFGHIJKLMNOPQRSTUVWXYZ</RegularH4>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                        <ColoredBox className="grey" />
                      </div>
                    </HeaderWrapper>

                    <HeaderWrapper>
                      <p>H5 - Regular - 10px</p>
                      <RegularH5>ABCDEFGHIJKLMNOPQRSTUVWXYZ</RegularH5>
                      <p>Colours</p>
                      <div className="row-flex">
                        <ColoredBox className="blue" />
                        <ColoredBox className="grey" />
                      </div>
                    </HeaderWrapper>

                    <Divider>
                      <span>Show Code</span>
                    </Divider>
                  </section>
                </Element>
              </div>
              <div className="column-right pt-50">
                <div
                  className={style.header}
                  ref={(ref) => {
                    this._header = ref
                  }}
                >
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

        </div>
    )
  }
}


export default TypographyPage;
