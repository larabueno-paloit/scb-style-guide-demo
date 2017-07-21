import React from 'react'
import styled from 'styled-components'

import { Header } from 'components'

const ContentWrapper = styled.div`
  padding: 30px 50px;
`

const ImgResponsive = styled.div`
  img {
    width: 100%;
  }
`

const Flex = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;

  &.sm {
    max-width: 780px;
  }

  .column {
    margin: 10px;
    flex: 1 1 0;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
    }
  }
`

const Title = styled.div`
  font-size: 24px;
  padding-bottom: 20px;
`

const Section = styled.section`
  padding: 20px 0;

  p {
    padding-bottom: 10px;
  }
`

export default props => <div>
  <Header>Straight2Bank</Header>
  <ImgResponsive>
    <img src='http://via.placeholder.com/1080x400' alt='' />
  </ImgResponsive>
  <ContentWrapper>
    <Section>
      <Title>The team</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

      <Flex>
        <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
        <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
        <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
        <div className='column'><img src='http://via.placeholder.com/230x230' alt='' /></div>
      </Flex>
    </Section>

    <Section>
      <Title>User Centric Approach</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

      <ImgResponsive>
        <img src='http://via.placeholder.com/980x280' alt='' />
      </ImgResponsive>

      <Flex className='sm'>
        <div className='column'>
          <Title>Discover</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
        </div>
        <div className='column'>
          <Title>Define</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
        </div>
        <div className='column'>
          <Title>Develop</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
        </div>
        <div className='column'>
          <Title>Deliver</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repe deserunt odio magni fugiat architecto amet! Molestias nihil, maxime cupiditate natus aspern, rerum ipsa laudantium iusto praesentium culpa, ea dolores sit?</p>
        </div>

      </Flex>
    </Section>

    <Section>
      <Title>Technology Approach</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, earum quod ea nemo vel architecto perspiciatis reprehenderit fugit? Natus magnam, a enim in! Possimus error fugiat est culpa. Esse, maiores!</p>

      <ImgResponsive>
        <img src='http://via.placeholder.com/980x280' alt='' />
      </ImgResponsive>
    </Section>
  </ContentWrapper>
</div>
