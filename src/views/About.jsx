import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import Inner from '../elements/Inner'
import { UpDown, UpDownWide } from '../styles/animations'
import { colors } from '../../tailwind'
import SVG from '../components/SVG'

const About = ({ children, offset }) => (
  <>
    <Divider bg="#23262b" clipPath="polygon(0 0%, 100% 4%, 100% 92%, 0 94%)" speed={0.2} offset={offset} />
    <Divider speed={0.1} offset={offset}>
      <SVG icon="butterfly" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="butterfly" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="butterfly" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="butterfly" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
