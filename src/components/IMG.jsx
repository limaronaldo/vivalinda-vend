import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  ${props => props.hiddenMobile && hidden};
  width: ${props => props.svgWidth};
  left: ${props => props.left};
  top: ${props => props.top};
`

const IMG = ({ children, width, left, top, hiddenMobile }) => (
  <Wrapper imgWidth={twWidth[`${width}`]} left={left} top={top} hiddenMobile={hiddenMobile}>
    {children}
  </Wrapper>
)

export default IMG

IMG.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

IMG.defaultProps = {
  width: 'full',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
