import React from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import Nav from '../Nav/Nav.js';
import SubNav from '../SubNav/SubNav.js';
import Color from '../Color/Color.js';
import Header from '../Header/Header.js';

var Element = Scroll.Element;

const DemoButton = styled.div`
  padding-top: 20px;

  span {
    border: 1px solid #999;
    padding: 5px 10px;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: #999;
  }
`

const TableWrapper = styled.div`
  width: 100%;

  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    font-size: 12px;
    color: #555;

    > tbody > tr > td,  > tbody > tr > th,  > thead > tr > td, > thead > tr > th {
       border: 1px solid #A1C0BF;
       padding: 10px;
     }

    > tbody {
      background-color: #C4EBEC;

    }

    > thead {
      background-color: #B0D3D2;
      font-size: 10px;
      color: #005c84;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`

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



class ColorsPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      subNav: [
        'table', 'practices'
      ]
    }
  }

  render() {
    return(
        <div>
          <Header title="Tables" />
          <div className="content">
            <div className="row-flex">
              <div className="column-left">
                <p>Tables should only be used for rendering data that belongs naturally in a grid, in other words where the data describes a number of objects that have the same properties.</p>
                <Element name="table">
                  <section className="pt-20">
                    <div className="row-flex space-between">
                      <div>
                        <h2>Basic Table</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <DemoButton>
                        <span>Responsive Demo</span>
                      </DemoButton>
                    </div>
                    <div className="row-flex">
                      <TableWrapper>
                        <table>
                          <thead>
                            <tr>
                              <th>Transaction Date</th>
                              <th>Value Date</th>
                              <th>Transaction Reference</th>
                              <th>Custom Reference</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>dd/mm/yyyy</td>
                              <td>dd/mm/yyyy</td>
                              <td>TXN100002</td>
                              <td>CRN100002</td>
                            </tr>
                            <tr>
                              <td>dd/mm/yyyy</td>
                              <td>dd/mm/yyyy</td>
                              <td>TXN100002</td>
                              <td>CRN100002</td>
                            </tr>
                            <tr>
                              <td>dd/mm/yyyy</td>
                              <td>dd/mm/yyyy</td>
                              <td>TXN100002</td>
                              <td>CRN100002</td>
                            </tr>
                            <tr>
                              <td>dd/mm/yyyy</td>
                              <td>dd/mm/yyyy</td>
                              <td>TXN100002</td>
                              <td>CRN100002</td>
                            </tr>
                          </tbody>
                        </table>
                        <Divider>
                          <span>Show Code</span>
                        </Divider>
                      </TableWrapper>

                    </div>

                  </section>
                </Element>

                <Element name="practices">
                  <section>
                    <div className="row-flex space-between">
                      <div>
                        <h2 className="pb-20">Best Practices</h2>
                        <div className="pb-20">
                          <p className="pb-0"><strong>Aligning table header content</strong></p>
                          <p>- Header text should usually always follow the same alignment as the column content.</p>
                        </div>
                        <div className="pb-20">
                          <p className="pb-0"><strong>Table content that should be left-aligned</strong></p>
                            <ul>
                              <li>- Text</li>
                              <li>- Identification numbers that will not be added up. E.g.- ID</li>
                              <li>- Column spanner content (a column spanner is the header that spans a few headers below it)</li>
                            </ul>
                        </div>
                        <div className="pb-20">
                          <p className="pb-0"><strong>Table content that should be center-aligned</strong></p>
                          <ul>
                            <li>- If all textual data in a column has the same number of characters and this number is at least 20% less than header text</li>
                            <li>- Icons</li>
                          </ul>
                        </div>
                        <div className="pb-20">
                          <p className="pb-0"><strong>Table content that should be right-aligned</strong></p>
                          <ul>
                            <li>- Numbers that are usually added up, to the decimal point</li>
                            <li>- Year</li>
                            <li>- Date</li>
                            <li>- Time</li>
                          </ul>
                        </div>
                      </div>

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
