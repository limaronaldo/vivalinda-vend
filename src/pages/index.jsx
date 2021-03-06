import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import PhotoCard from '../components/PhotoCard'


// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import InstaPhotos from '../elements/InstaPhotos'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/borboletasvg.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Vivalinda
        </BigTitle>
        <Subtitle>Você Merece</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title></Title>
        <ProjectsWrapper>
          <InstaPhotos />
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Sobre</Title>
        <AboutHero>
          <Avatar src={avatar} alt="borboleta" />
          <AboutSub>
            Estrever um texto. Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.
            Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
            Estrever um texto. Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto.
            Estrever um texto.Estrever um texto.Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. Estrever um texto.Estrever uEstrever um texto.Estrever um t
            Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. 
            Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. Estrever um texto.Estrever um texto. 
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Fale Conosco</Title>
          <ContactText>
            Envie um <a href="mailto:contato@vivalinda.com.br">email</a> or ou acesse nossas redes sociais:{' '}
            <a href="https://instagram.com/vivalindaoficial">Instagram</a> &{' '}
            <a href="https://fb.com/vivalindaoficial">Facebook</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; Todos os direitos Reservados{' '}
          <a href="https://www.vivalinda.com.br">Vivalinda</a> 2019
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
