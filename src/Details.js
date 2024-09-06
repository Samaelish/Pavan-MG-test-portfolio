// Logo images
import logogradient from './assets/logo.svg'
import logo from './assets/logo2.svg'
// Profile Image
import profile from './assets/profile-sam.jpg'
// Tech stack images
import html from './assets/techstack/html.png'
import css from './assets/techstack/css.png'
import sass from './assets/techstack/sass.png'
import js from './assets/techstack/js.png'
import react from './assets/techstack/react.png'
import redux from './assets/techstack/redux.png'
import tailwind from './assets/techstack/tailwind.png'
import bootstrap from './assets/techstack/bootstrap.png'
import vscode from './assets/techstack/vscode.png'
import github from './assets/techstack/github.png'
import git from './assets/techstack/git.png'
import gsap from './assets/techstack/gsap.png'
// Porject Images
import projectImage1 from './assets/projects/store-preview.png'
import projectImage2 from './assets/projects/todo-preview.png'
import projectImage3 from './assets/projects/weather-preview.png'
import projectImage4 from './assets/projects/converter-preview.jpg'
import projectImage5 from './assets/projects/cockroach-preview.jpg'
import projectImage6 from './assets/projects/bootstrap-portfolio.png'

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
}

// Personal Details
export const personalDetails = {
  name: 'Семён Денисов',
  tagline: 'и я создал это на Vite',
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
}

// Social Media URLs
export const socialMediaUrl = {
  headhunter: 'https://hh.ru/resume/a7cce4a5ff086a4aeb0039ed1f63434c716572',
  github: 'https://www.github.com/Samaelish',
  vkontakte: 'https://vk.com/samaelish',
}

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  git: git,
  github: github,
  gsap: gsap,
}

// Project Details 
export const projectDetails = [
  {
    title: 'Лендинг страйкбольного магазина',
    image: projectImage1,
    description: `Это сайт-визитка на HTML+CSS и чистом JS. Также использована библиотека scroll-reveal`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://store-website.vercel.app/',
    githubLink: 'https://github.com/Samaelish/Store-Website',
  },
  {
    title: 'Список задач на React и Typescript',
    image: projectImage2,
    description: `Удаление и добавление пользователей, основы Typescript и React`,
    techstack: 'React, TypeScript',
    previewLink: 'https://react-typescript-todo-plum.vercel.app/',
    githubLink: 'https://github.com/Samaelish/React-Typescript-Todo',
  },
  {
    title: 'Погода онлайн на React',
    image: projectImage3,
    description: `Веб приложение с погодой "Погода онлайн на React".`,
    techstack: 'HTML/CSS, React, Openweathermap API',
    previewLink: 'https://weather-react-seven.vercel.app/',
    githubLink: 'https://github.com/Samaelish/WeatherReact',
  },
  {
    title: 'Калькулятор курса валют с использованием API',
    image: projectImage4,
    description: `Калькулятор курса валют с использованием API`,
    techstack: 'JavaScript, React, Vite, ExchangerateApi',
    previewLink: 'https://currency-converter-markgroup.vercel.app/',
    githubLink: 'https://github.com/Samaelish/currency-converter-markgroup',
  },
  {
    title: 'Игра "Раздави Таракана"',
    image: projectImage5,
    description: `Игра "Раздави Таракана" на HTML+CSS+JS`,
    techstack: 'HTML/CSS, JavaScript',
    previewLink: 'https://whack-a-mole-nu-ashen.vercel.app/',
    githubLink: 'https://github.com/Samaelish/whack-a-mole?tab=readme-ov-file',
  },
  {
    title: 'Портфолио на Bootstrap 5',
    image: projectImage6,
    description: `Простое портфолио, сделанное на чистом Bootstrap 5`,
    techstack: 'HTML | Bootstrap 5',
    previewLink: 'https://portfolio-bootstrap-5.vercel.app/',
    githubLink: 'https://github.com/Samaelish/Portfolio-Bootstrap-5',
  },
]

// Contact Details
export const contactDetails = {
  email: 'semyondenisov@gmail.com',
  phone: '+7 (915) 363-40-14',
}
