import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import Checkout from "../components/Checkout"

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
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
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
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
          Join Mike Schmidt
        </BigTitle>
        <Subtitle>Help reform public safety in Multnomah County.</Subtitle>
        <Subtitle>Mike Schmidt for District Attorney 2020</Subtitle>
        <Subtitle><Checkout /></Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>What will Mike do?</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Platform One"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione similique in est ad, quaerat eos, architecto nemo a, laudantium non. Inventore tenetur at consequatur placeat esse. Sint, sequi minima.
          </ProjectCard>
          <ProjectCard
            title="Platform Two"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione similique in est ad, quaerat eos, architecto nemo a, laudantium non. Inventore tenetur at consequatur placeat esse. Sint, sequi minima.
          </ProjectCard>
          <ProjectCard
            title="Platform Three"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione similique in est ad, quaerat eos, architecto nemo a, laudantium non. Inventore tenetur at consequatur placeat esse. Sint, sequi minima.
          </ProjectCard>
          <ProjectCard
            title="Platform Four"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ratione similique in est ad, quaerat eos, architecto nemo a, laudantium non. Inventore tenetur at consequatur placeat esse. Sint, sequi minima.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Meet Mike</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo suscipit repudiandae tenetur quod a, in est quibusdam culpa. Modi reiciendis nulla quod odio beatae harum hic tempore eligendi odit? Rerum.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi ipsa praesentium cupiditate saepe totam laudantium provident, doloremque ab voluptatibus ex reprehenderit dolore maiores quo reiciendis! Libero dolores molestias accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolorem vero nulla cum, officia aliquam quaerat voluptate. Quisquam placeat ad esse nihil, corporis id temporibus? Quis qui provident accusamus eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur sapiente vitae incidunt voluptate amet assumenda dolorem. Cupiditate culpa, pariatur sunt error odit perspiciatis expedita animi veniam incidunt eligendi quidem!
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Mike for DA{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
