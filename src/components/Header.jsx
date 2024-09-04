import { useState } from 'react'
import { logos, socialMediaUrl } from '../Details'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { headhunter, github, vkontakte } = socialMediaUrl
  const toggleClass = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='container mx-auto md:flex justify-between py-2 max-width'>
      <div className='flex justify-between items-center py-2 md:py-10'>
        <a href='/'>
          <img className='w-14' src={logos.logogradient} alt='logo' />
        </a>
        <div onClick={toggleClass} className='cursor-pointer'>
          <svg
            className='stroke-dark-heading md:hidden'
            width='25'
            height='20'
            viewBox='0 0 16 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z'
              strokeWidth='1.875'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? 'hidden' : null} text-center md:flex justify-between`}>
        <ul className='font-semibold text-content md:flex items-center md:space-x-5 md:mr-10'>
          <li className='pb-1 md:pb-0'>
            <a href='/' onClick={toggleClass}>
              Главная
            </a>
          </li>
          <li className='pb-1 md:pb-0'>
            <a href='/' onClick={toggleClass}>
              Обо мне
            </a>
          </li>
          <li className='pb-1 md:pb-0'>
            <a href='/technologies' onClick={toggleClass}>
              Технологии
            </a>
          </li>
          <li className='pb-1 md:pb-0'>
            <a href='/projects' onClick={toggleClass}>
              Проекты
            </a>
          </li>
          <li>
            <a href='/contact' onClick={toggleClass}>
              Контакты
            </a>
          </li>
        </ul>
        <ul className='flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5'>
          <li>
            <a href={github} target='_blank' rel='noreferrer noopener'>
              <svg
                className='fill-dark-content'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z'
                />
              </svg>
            </a>
          </li>
          <li>
            <a href={vkontakte} target='_blank' rel='noreferrer noopener'>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='38' height='38' viewBox='0 0 48 48'>
                <path fill='#1976d2' d='M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z'></path>
                <path
                  fill='#fff'
                  d='M25.2,33.2c-9,0-14.1-6.1-14.3-16.4h4.5c0.1,7.5,3.5,10.7,6.1,11.3V16.8h4.2v6.5c2.6-0.3,5.3-3.2,6.2-6.5h4.2	c-0.7,4-3.7,7-5.8,8.2c2.1,1,5.5,3.6,6.7,8.2h-4.7c-1-3.1-3.5-5.5-6.8-5.9v5.9H25.2z'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href={headhunter} target='_blank' rel='noreferrer noopener'>
              <svg
                className='fill-dark-content'
                width='32'
                height='32'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24'
                  fill='#D6001C'
                />
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M13.65 13.169v8.164c1.243-1.482 2.733-2.228 4.461-2.228.89 0 1.687.17 2.402.507.717.335 1.253.765 1.615 1.287.364.527.61 1.104.743 1.74.132.633.198 1.618.198 2.954v8.729h-3.862V26.46c0-1.56-.07-2.548-.217-2.968a1.917 1.917 0 0 0-.775-1c-.372-.251-.835-.375-1.394-.375-.64 0-1.214.16-1.713.478-.51.32-.876.798-1.108 1.437-.236.64-.354 1.585-.35 2.836l-.004 7.454H9.789V13.169h3.862m15.206 0v8.164c1.244-1.482 2.733-2.228 4.46-2.228.887 0 1.69.17 2.406.507.714.335 1.25.765 1.61 1.287a4.69 4.69 0 0 1 .743 1.74c.133.633.199 1.618.199 2.954v8.729h-3.858V26.46c0-1.56-.073-2.548-.22-2.968a1.91 1.91 0 0 0-.777-1c-.368-.251-.835-.375-1.394-.375-.639 0-1.213.16-1.713.478-.503.32-.871.798-1.106 1.437-.232.64-.35 1.585-.35 2.836v7.454H25V13.169h3.857'
                  fill='#FEFEFE'
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
