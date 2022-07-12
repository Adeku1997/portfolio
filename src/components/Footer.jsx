import React from 'react'
import SocialMedia from './SocialMedia'
import styled from 'styled-components'
import BottomNav from './BottomNav';

const Footer = () => {
  return (
    <Container>
        <SocialMedia/>
        {/* <BottomNav/> */}
    </Container>
  )
}

const Container = styled.div`
position:relative;
`

export default Footer