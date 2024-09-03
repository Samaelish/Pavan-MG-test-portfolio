import { techStackDetails } from '../Details'

function Technologies() {
  const { html, css, js, react, redux, tailwind, bootstrap, sass, vscode, git, github, gsap} =
    techStackDetails
  return (
    <main className='container mx-auto max-width pt-10 pb-20 '>
      <section>
        <h1 className='text-center text-2xl text-dark-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold'>Tech Stack</h1>
        <p className='text-center text-content py-2'>Technologies I&apos;ve been working with recently</p>
      </section>
      <section className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6'>
        <img src={html} title='html' alt='' />
        <img src={css} title='CSS' alt='' />
        <img src={js} title='JavaScript' alt='' />
        <img src={react} title='React' alt='' />
        <img src={redux} title='Redux' alt='' />
        <img src={bootstrap} title='Bootstrap' alt='' />
        <img src={tailwind} title='Tailwind CSS' alt='' />
        <img src={sass} title='SASS' alt='' />
        <img src={git} title='Git' alt='Git' />
        <img src={gsap} title='Gsap' alt='Gsap' />
        <img src={vscode} title='Visual Studio Code' alt='' />
        <img src={github} title='Github' alt='Github' />
      </section>
    </main>
  )
}

export default Technologies
