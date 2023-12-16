import React from 'react'
import Container from './Container'
import Card from './Card'

export default function MyProjects() {
  return (
    <div id="projects">
    <Container title="My Projects" description='Projects I have worked on.'>
        <div>
            <Card />
        </div>
    </Container>
    </div>
  )
}
