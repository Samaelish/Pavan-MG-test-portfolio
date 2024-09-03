import { personalDetails } from '../Details'

function Home() {
  const { name, tagline, img } = personalDetails

  return (
    <main className='container mx-auto max-width section md:flex justify-between items-center'>
      <div>
        <h1 className='text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1 className='text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold'>
          {name}
        </h1>
        <h2 className='text-2xl text-dark-heading  md:text-4xl xl:text-5xl xl:leading-tight font-bold'>{tagline}</h2>
      </div>
      <div className='mt-5 md:mt-0'>
        <img className='w-1/2 md:ml-auto' src={img} alt='Pavan MG' />
      </div>
    </main>
  )
}

export default Home
