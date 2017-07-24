import React from 'react'
import styled from 'styled-components'

import { Header, ColorBox } from 'components'

const ContentWrapper = styled.div`
  padding: 30px 50px;
`

const Flex = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
`

const ColumnLeft = styled.div`
  flex: 1;
`

const ColumnRight = styled.div`
  flex: 0 0 180px;
  position: relative;
`

const Section = styled.section`
  padding: 60px 0 20px;

  p {
    padding-bottom: 10px;
  }
`

const Title = styled.div`
  font-size: 25px;
  line-height: 35px;
`

export default props => <div>
  <Header>Colors</Header>
  <ContentWrapper>
    <Flex>
      <ColumnLeft>
        <p>The colours specified below should be used for all S2B user interfaces. It’s important to understand  how the colour system works in a multi product environment. It’s also very important to adhere to the accessibility guidelines.</p>
        <Section>
          <Title>Primary Colour</Title>
          <p>Main colours based on the theme</p>
          <ColorBox color='#000' showCode />
        </Section>
      </ColumnLeft>
      <ColumnRight>&nbsp;</ColumnRight>
    </Flex>
  </ContentWrapper>
</div>
