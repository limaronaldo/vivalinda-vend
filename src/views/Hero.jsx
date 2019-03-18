import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide, rotateAnimation } from '../styles/animations'
import SVG from '../components/SVG'
import IMG from '../components/IMG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Rotate = styled.div`
  ${rotateAnimation('10s')};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="butterfly" width={24} stroke={colors.gold} left="60%" top="50%" />
        <SVG icon="butterfly" hiddenMobile width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="butterfly" width={12} stroke={colors.white} left="90%" top="50%" />
        <SVG icon="butterfly" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="butterfly" width={16} stroke={colors['pink-light']} left="68%" top="15%" />
        <SVG icon="butterfly" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="butterfly" hiddenMobile width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        <SVG icon="butterfly" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        <SVG icon="butterfly" hiddenMobile width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="butterfly" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="butterfly" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="butterfly" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      </UpDownWide>
      <SVG icon="butterfly" width={64} fill={colors.gold} left="95%" top="5%" />
      <SVG icon="butterfly" hiddenMobile width={64} fill={colors.purple} left="5%" top="90%" />
      <SVG icon="butterfly" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="butterfly" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="butterfly" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="butterfly" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      <SVG icon="butterfly" width={24} fill={colors.gold} left="70%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <IMG left="70%" top="70%">
        <img src="../images/photo.jpg" alt="foto" />
      </IMG>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
