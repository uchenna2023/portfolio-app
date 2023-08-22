/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import uchenna from './assets/uchenna.png'
import rest from './assets/rest.png'
import country from './assets/country.png'
import logo2 from './assets/logo2.svg'
import logo from './assets/logo.svg'
import circles2 from './assets/circles2.png'
import linkedin from './assets/linkedin.svg'
import git from './assets/git.svg'
import Oval from './assets/Oval.svg'


function App() {

  return (
    <div className='bg-[#151515] '>
      <header className='pr-6 pl-6 md:pr-32 md:pl-32 mb-5'>
        <nav className='flex flex-col md:flex-row text-[#ffffff] justify-center md:justify-between items-center pt-3 pb-3'>
          <p className='text-[2rem] mb-5'>Uchenna</p>
          <div className='flex flex-row text-[#ffffff] gap-10 pr-2'>
            <a><img src={git}/></a>
            <a><img src={linkedin}/></a>
            <a><img src={logo} /></a>
            <a><img src={logo2} /></a>
          </div>
        </nav>
      </header>
      <main>
        <section className='flex-col md:flex-row justify-center items-center relative pr-32 pl-32 hidden md:flex'>
          <article className='text-[#ffffff] flex-1 relative' >
            <h1 className='text-6xl font-bold pb-14'>Nice to meet you!<br /> I am <span className=' border-b-[#4EE1A0] border-b-[5px]'>Uchenna Jude.</span></h1>
            <p className=' pb-20'>Based in Nigeria Am a frontend developer <br />love to develop website and web apps with great <br />value for accessibility</p>
            <button className='text-2xl border-b-[#4EE1A0] border-b-[3px]'>CONTACT ME</button>
            <span className='absolute -right-16 -bottom-6'>
              <img src={Oval} className='' />
            </span>
          </article>
          <img src={uchenna} className='p-2 w-[445px] border-2' />
          <span className='absolute left-[10px] -top-1'>
            <img src={circles2} className='w-[350px]' />
          </span>
        </section>
        <section className='flex flex-col md:flex-row justify-center items-center relative md:hidden'>
          <img src={uchenna} className='w-3/6 border-2 rounded-br-[2rem]' />
          <span className='absolute left-[10px] -top-1'>
            <img src={circles2} className='w-5/12' />
          </span>
          <article className='text-[#ffffff] flex-1 relative mt-5' >
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-4xl font-bold pb-14'>Nice to meet you!<br /> I am <span className=' border-b-[#4EE1A0] border-b-[5px]'>Uchenna Jude.</span></h1>
              <p className=' pb-20'>Based in Nigeria Am a frontend developer <br />love to develop website and web apps with great <br />value for accessibility</p>
              <button className='text-2xl border-b-[#4EE1A0] border-b-[3px]'>CONTACT ME</button>
              <span className='absolute -right-16 -bottom-6'>
                <img src={Oval} className='w-5/12' />
              </span>
            </div>

          </article>

        </section>
        <section className='flex flex-col items-center md:grid grid-cols-3 gap-y-16  pt-10 mt-10 border-t-stone-300 border-t-2 mr-6 ml-6 md:mr-32 md:ml-32 md:border-b-stone-900 border-b-1 border-b-stone-300 border-b-2 pb-10'>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>HTML</h2>
            <p>2 years experience</p>
          </article>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>CSS</h2>
            <p>2 years experience</p>
          </article>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>JAVASCRIPT</h2>
            <p>2 years experience</p>
          </article>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>Accessibility</h2>
            <p>2 years experience</p>
          </article>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>Taiwind</h2>
            <p>2 years experience</p>
          </article>
          <article className='text-[#ffffff]'>
            <h2 className='text-3xl pb-3'>Git</h2>
            <p>2 years experience</p>
          </article>
        </section>

        <section className='flex flex-col mt-10 pr-6 pl-6 md:pr-32 md:pl-32'>
          <div className='flex flex-row mb-20 mt-10 text-white justify-between'>
            <h2 className='text-3xl md:text-7xl font-bold '>Projects</h2>
            <button className='border-b-[#4EE1A0] border-b-[3px] text-2xl'>Contact Us</button>
          </div>
          <div className='flex flex-col md:grid grid-cols-2 gap-y-8 gap-x-20 md:w-full w-6/6'>
            <div className='relative w-full'>
              <div className='w-full h-[400px]'>
                <img src={country} className='h-[400px] w-full object-cover' />
              </div>
              <div className='hidden md:absolute md:text-3xl md:text-white md:bg-[#000000] md:w-full md:h-[400px] md:top-0 md:left-0 md:flex md:flex-col md:justify-center md:items-center md:opacity-[0] md:hover:opacity-[.8] hover:cursor-pointer duration-500'>
                <p className=' border-b-[#4EE1A0] border-b-[3px] mb-5 text-[1rem] hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                <p className='border-b-[#4EE1A0] border-b-[3px] text-[1rem] hover:text-[#4EE1A0]'>VIEW CODE</p>
              </div>
              <div className='text-white'>
                <h3 className='mt-5 text-2xl'>DESIGN WEBSITE</h3>
                <h4 className='mt-5'>HTML CSS</h4>
              </div>
              <div className='text-white text-lg flex flex-row gap-8 mt-5 md:hidden'>
                <p className='mb-3 border-b-[#4EE1A0] border-b-[3px]'>VIEW PROJECT</p>
                <p className='mb-3 border-b-[#4EE1A0] border-b-[3px]'>VIEW CODE</p>
              </div>
            </div>
            <div>
              <div className='relative w-full h-[400px]'>
                <div className='w-full h-[400px]'>
                  <img src={rest} className='w-full h-[400px] object-cover' />
                </div>
                <div className='hidden md:absolute md:text-3xl md:text-white md:bg-[#000000] md:w-full md:h-[400px] md:top-0 md:left-0 md:flex md:flex-col md:justify-center md:items-center md:opacity-[0] md:hover:opacity-[.8] hover:cursor-pointer duration-500'>
                  <p className=' border-b-[#4EE1A0] border-b-[3px] mb-5 text-[1rem] hover:text-[#4EE1A0]'>VIEW PROJECT</p>
                  <p className='border-b-[#4EE1A0] border-b-[3px] text-[1rem] hover:text-[#4EE1A0]'>VIEW CODE</p>
                </div>
                <div className='text-white'>
                  <h3 className='mt-5 text-2xl'>DESIGN WEBSITE</h3>
                  <h4 className='mt-5'>HTML CSS</h4>
                </div>
                <div className='text-white text-lg flex flex-row gap-8 mt-5 md:hidden'>
                  <p className='mb-3 border-b-[#4EE1A0] border-b-[3px]'><a href='https://countries-api-app.pages.dev/' target='_blank' rel='noreferrar'>VIEW PROJECT</a></p>
                  <p className='mb-3 border-b-[#4EE1A0] border-b-[3px]'>VIEW CODE</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col md:flex-row mt-32 bg-[#242424] justify-between md:pl-32 md:pr-32 pr-6 pl-6 pt-20'>
          <article className='text-white flex flex-col items-center justify-center w-12/12 md:w-6/12 p-5'>
            <h2 className='text-5xl pb-10'>Contact</h2>
            <p>I will love to hear about your project and how i can help. Please fill the form and i will get back to you as soon as possible</p>
          </article>
          <form className='flex flex-col justify-end w-12/12 md:w-6/12 p-5'>
            <label className='text-white mb-1'>Name: <input type='text' className='w-full p-2 mb-[20px] bg-[#242424] focus:border-lime-500 focus:border-b-4 border-b-stone-300 border-b-2' /></label>
            <label className='text-white'> Email: <input type='email ' className='w-full p-2 mb-[20px] bg-[#242424] border-b-stone-300 border-b-2' /></label>
            <textarea className='w-full mb-full p-5 bg-[#242424] border-b-stone-300 border-b-2' placeholder='Message'></textarea>
            <div className='flex flex-row justify-end pt-3 pb-2 font-bold mt-2'><input type='submit' className='text-white border-b-stone-300 border-b-2 pb-2' value='SEND MESSAGE' /></div>

          </form>
        </section>
      </main>
      <footer className='pr-6 pl-6 md:pr-32 md:pl-32 pt-8 pb-10 bg-[#242424] w-12/12'>
        <nav className='border-t-stone-300 border-t-2 flex flex-col md:flex-row text-[#ffffff] justify-center md:justify-between items-center gap-5 pt-3 pb-3 w-full'>
          <p className='text-[2rem]'>Uchenna</p>
          <div className='flex flex-row text-[#ffffff] gap-10 pr-2'>
            <button><img src={git} alt='link to github page' /></button>
            <button><img src={linkedin} alt='link to linkedin page '/></button>
            <button><img src={logo} alt='link to front end mentor page'/></button>
            <button><img src={logo2} alt='link to twitter page'/></button>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default App
