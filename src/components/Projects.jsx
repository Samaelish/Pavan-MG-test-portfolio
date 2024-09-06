import React from 'react'
import Project from './Project'
import { projectDetails } from '../Details'

function Projects() {
  return (
    <main id='projects' className='container mx-auto max-width pt-10 mb-20'>
      <section>
        <h1 className='text-center text-2xl text-dark-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>Проекты</h1>
        <p className='font-semibold text-center text-content py-2'>Те проекты, которые я создал</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10'>
          {React.Children.toArray(
            projectDetails.map(({ title, image, description, techstack, previewLink, githubLink }) => (
              <Project
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            )),
          )}
        </div>
      </section>
    </main>
  )
}

export default Projects
