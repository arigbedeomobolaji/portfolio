import React from 'react'
import Container from './Container'
import { projects } from '@src/lib/projects'
import Card from './Card'

export default function MyProjects() {
  return (
    <div id="projects">
    <Container title="My Projects" description='Projects I have worked on.'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-start md:place-items-center gap-20'>
            {
              projects.map((project) => (
                <Card key={project.id} {...project} />
              ))
            }
        </div>
    </Container>
    </div>
  )
}
