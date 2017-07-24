import React from 'react'
import styled from 'styled-components'

import { Header } from 'components'

const ContentWrapper = styled.div`
  padding: 30px 50px;
`

const Flex = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
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
  font-size: 24px;
  padding-bottom: 20px;
`

const IconWrapper = styled.div`
  color: #787878;
  width: 90px;
  flex: 0 0 90px;
  margin-right: 9px;
  margin-bottom: 10px;
  height: 90px;
  padding-top: 10px;
  background-color: #D8D8D8;
  text-align: center;
  font-size: 12px;
`

const icons = [
  'Search','Menu','Options', 'Close', 'Dropdown', 'Expand', 'Favourite','Favourite filled', 'Unchecked box',
  'Check all', 'Check box', 'Preview', 'icon id', 'Doc uploaded', 'icon id', 'Word file', 'Excel File', 'Document',
  'PDF file', 'icon id', 'Import', 'icon id', 'Export', 'icon id'
]

const listItems = icons.map((icons,i) =>
  <IconWrapper key={i}>
    {icons}
  </IconWrapper>
)

export default props => <div>
  <Header>Icons</Header>
  <ContentWrapper>
    <Flex>
      <ColumnLeft>
        <p>This library of icons is build as a font to increase the quality of the display across devices.</p>
        <Section>
          <Title>All Icons</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Section>
        <Flex>
          {listItems}
        </Flex>
      </ColumnLeft>
      <ColumnRight>&nbsp;</ColumnRight>
    </Flex>
  </ContentWrapper>
</div>
