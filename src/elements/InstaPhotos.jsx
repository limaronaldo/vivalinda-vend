import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import vivalinda from '../images/photo.jpg'

const axios = require('axios')

const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
const INSTA_TOKEN = '2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6'

const getInstagramFeedData = async numOfPics => {
  try {
    return await axios.get(`${baseURL}?access_token=${INSTA_TOKEN}&count=${numOfPics}&callback=?`)
  } catch (error) {
    console.error(error)
  }
}

const Insta = () => {
  const [feed, setFeed] = useState([])
  const [links, setLinks] = useState([])

  useEffect(() => {
    const logPhotos = async numOfPics => {
      const feedData = await getInstagramFeedData(numOfPics)
      console.log(feedData.data.data)
      return feedData.data.data.map(photo => photo)
    }
    logPhotos(12).then(value => setFeed(value))
  }, [])

  return (
    <>
      {feed.map((photo, i) => (
        <a href={photo.link} key={i}>
          <Img src={photo.images.standard_resolution.url} alt="foto" />
        </a>
      ))}
    </>
  )
}

const Img = styled.img`
  ${tw`shadow-lg w-full relative no-underline rounded-lg`};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
`

const InstaPhotos = () => <Insta />

export default InstaPhotos

/*
class Insta extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: [],
    }
  }

componentDidMount() {
    this.props.promise.then(value => {
      this.setState({ value })
    })
  }


  render() {
    return (
      <div>
        {this.state.value.map(photo => (
          <Img src={photo} alt="foto" />
        ))}
      </div>
    )
  }
}
  */
