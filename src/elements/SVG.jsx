import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { width as twWidth } from '../../tailwind'
import { hidden } from '../styles/utils'

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },
  arrowUp: {
    shape: (
      <>
        <path d="M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z" />{' '}
        <path d="M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z" />
      </>
    ),
    viewBox: '0 0 30 42',
  },
  upDown: {
    shape: (
      <>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </>
    ),
    viewBox: '0 0 30 44.58',
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: '0 0 100 100',
  },
  butterfly: {
    shape: (
      <path d="M31.65,81.8a.56.56,0,0,1-.39-.21,3.53,3.53,0,0,1-.7-2.38A27.69,27.69,0,0,1,34.3,69.9a35.49,35.49,0,0,1-9.68,1.38c-10.92,0-19.88-5.43-24-14.53a.27.27,0,0,1,0-.29c.08-.11.27-.17.55-.17a6.08,6.08,0,0,1,2.46.63,10.82,10.82,0,0,0,7.61,2.53,46.06,46.06,0,0,0,7.16-.8,44.79,44.79,0,0,1,7.08-.79c.48,0,.95,0,1.41.06l.25,0C18.35,53.35,13,47.62,11.4,40.89c-1.41-5.8,2.76-9.74,6.8-13.53l.26-.25c2.84-2.68,3.93-5.62,3.15-8.52-1-3.64-5-6.95-10.36-8.63,0,0-1.08-.41-1.06-.78,0-.14.13-.23.37-.28a27.54,27.54,0,0,1,5.56-.54,38.74,38.74,0,0,1,22.71,7.81,44.51,44.51,0,0,1,4.33,4,13.65,13.65,0,0,1,1.7-.44c4.12-.92,6.88-2.93,8-5.8,1.34-3.5,0-8.11-3.39-12C49.4,1.78,48.88,1,49,.74a.27.27,0,0,1,.27-.13.78.78,0,0,1,.24,0c8.66,2.7,16.57,10.72,19.24,19.51,4.14,13.67.13,27.11-10.75,36,1.53-.24,3-.41,4.37-.52h0c.67,0,1,.85,1,1.7s-.23,1.83-.92,1.88C45.66,60.51,34.91,68.2,32.25,80.93c-.12.59-.32.88-.6.88ZM5.25,59.65a30.72,30.72,0,0,0,3.17,4.06,19.3,19.3,0,0,0,14.82,6.35,32.86,32.86,0,0,0,13.08-3,31.56,31.56,0,0,1,7-5.8l.81-.46.19,0-.08-.08c7.17-10.37,7.87-23,1.89-33.67a30.27,30.27,0,0,0-3-4.32c-.58-.71-1.18-1.4-1.8-2C34.82,13.86,25.66,9.8,16.86,9.8h-1.1c-.84,0-1.45,0-1.85,0h0a23.42,23.42,0,0,1,3.39,1.31c4.39,2.08,6.89,4.71,7.44,7.79.63,3.53-1.36,7.53-5.73,11.57-3.69,3.41-5.17,7.15-4.4,11.1,1.52,7.75,11.22,14.52,19.06,18q.91.34,1.79.74l.8.3c.56.21.84.4.9.59l0,.08-.11.17a1.43,1.43,0,0,1-.7.11,8,8,0,0,1-1.29-.12,2.77,2.77,0,0,1-.72-.19c-.31-.16-.63-.31-.94-.44L33,60.61a18,18,0,0,0-6.66-1.13,58.6,58.6,0,0,0-7.29.63,57.66,57.66,0,0,1-7.28.63A18,18,0,0,1,5.25,59.65ZM45.12,22.29c9.14,10.86,10.74,24.27,4.28,36,10.48-5.7,17.31-15,18.77-25.56A28.58,28.58,0,0,0,54,4.25C53,3.66,52.24,3.23,51.81,3h0a19.09,19.09,0,0,1,2,2.72c2.3,3.69,2.83,7,1.55,9.76C54,18.48,50.44,20.85,45.12,22.29Z" />
    ),
    viewBox: '0 0 100 100',
  },
}

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
)

export default SVG

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool,
}

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  hiddenMobile: false,
}
