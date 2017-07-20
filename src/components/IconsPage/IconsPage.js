import React from 'react';
import Nav from '../Nav/Nav.js';
import Icon from '../Icon/Icon.js';
import styled from 'styled-components';
import Header from '../Header/Header.js';

class IconsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      items: [
        'Search','Menu','Options', 'Close', 'Dropdown', 'Expand', 'Favourite','Favourite filled', 'Unchecked box',
        'Check all', 'Check box', 'Preview', 'icon id', 'Doc uploaded', 'icon id', 'Word file', 'Excel File', 'Document',
        'PDF file', 'icon id', 'Import', 'icon id', 'Export', 'icon id'
      ]
    }
  }

  render() {
    return(
        <div>
          <Header title="Icons"/>
          <div className="content">
            <div className="row-flex">
              <div className="column-left">
                <p>This library of icons is build as a font to increase the quality of the display across devices.</p>
                <section className="pt-40">
                  <div className="title-text">All icons</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="row-flex">
                      {this.state.items.map((x, i) =>
                      <Icon key={i} label={x} />)}
                    </div>
                </section>
              </div>
              <div className="column-right"></div>
            </div>
          </div>

        </div>
    )
  }
}


export default IconsPage;
