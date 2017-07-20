import React from 'react';
import Nav from '../Nav/Nav.js';
import Header from '../Header/Header.js';
import Banner from '../../resources/images/principles/banner-img.png';
import Img1 from '../../resources/images/principles/img1.png';
import Img2 from '../../resources/images/principles/img2.png';
import Img3 from '../../resources/images/principles/img3.png';
import Img4 from '../../resources/images/principles/img4.png';


class PrinciplesPage extends React.Component {
  render() {
    return(
        <div>
          <Header title="CIB Channel" />
          <img src={Banner} alt=""/>
          <div className="content">
            <section>
              <div className="title-text">Think Big Picture</div>
              <p>It is important to understand your project is only part of the customer journey.  If your design is not consistent with the other touch points experienced by the user, then the journey has become fragmented and the brand experience diluted.</p>
              <p>As a global bank with client relationships across multiple geographies, we must provide a consistent customer experience across all channels which look and behave in a way clients recognize and expect.</p>
              <p>Designs must follow our style guide of standardized colours, typography, layout and icons so clients can move seamlesslessly between channels without having to learn new behaviours.</p>

              <div className="row-flex">
                <div className="column"><img src={Img1} alt=""/></div>
                <div className="column"><img src={Img2} alt=""/></div>
                <div className="column"><img src={Img3} alt=""/></div>
                <div className="column"><img src={Img4} alt=""/></div>
              </div>
            </section>

            <section>
              <div className="title-text">How to Evolve</div>
              <p>When embarking on a new project, before creating new designs, check the library to ensure your designs align with our style guide. Our library of resources include symbols, grids, colours and guidelines on typography and design elements (there’s no need to reinvent the wheel!)</p>
              <p>As designers, it is in our DNA to strive for continuous improvement, but it is important to understand how to do this without deviating from our core principle of giving clients a consistent, recognizable experience.</p>
              <p>If you spot an opportunity for change, or discover the element you need does not exist, follow the below guidelines to help us move forward as a team.</p>
            </section>
          </div>
        </div>
    )
  }
}


export default PrinciplesPage;
