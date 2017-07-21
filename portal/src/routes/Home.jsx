import React from 'react'

import { Header } from 'components'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header title='Straight2Bank' />
        <div className='inner-content-wrapper'>
          <img src='http://via.placeholder.com/1080x400' alt='' />
          <div className='content'>
            <section>
              <div className='title-text'>The team</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

              <div className='row-flex'>
                <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
                <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
                <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
                <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
              </div>
            </section>

            <section>
              <h4>User Centric Approach</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

              <div className='row-flex'>
                <div className='column'><img src='http://via.placeholder.com/980x280' alt='' /></div>
              </div>

              <div className='row-flex sm-row'>
                <div className='column'>
                  <h4>Discover</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
                </div>
                <div className='column'>
                  <h4>Define</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
                </div>
                <div className='column'>
                  <h4>Develop</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
                </div>
                <div className='column'>
                  <h4>Deliver</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
                </div>

              </div>
            </section>

            <section>
              <h4>Technology Approach</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

              <div className='row-flex'>
                <div className='column'><img src='http://via.placeholder.com/980x280' alt='' /></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
