import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import InstaPhotos from '../elements/InstaPhotos'

const Wrapper = styled.a`
  width: 100%;

  ${tw`shadow-lg relative no-underline rounded-lg px-0 py-0 md:py-0 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectCard = ({ link, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <InstaPhotos />
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  link: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}
