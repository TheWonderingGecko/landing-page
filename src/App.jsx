import BrowserCard from './components/BrowserCard'
import Logo from '/src/assets/images/footer-logo.svg'
import Nav_Bar from './components/Nav_Bar'
import QuestionsCard from './components/QuestionsCard'
import Title_Slide from './components/Title_Slide'
import Chrome from '/src/assets/images/logo-chrome.svg'
import Firefox from '/src/assets/images/logo-firefox.svg'
import Opera from '/src/assets/images/logo-opera.svg'
import questions from '../src/assets/data/questions.jsx'
import Button from './components/Button'
import error_icon from '/src/assets/images/icon-error.svg'
import { useState } from 'react'
import Nav_links from './components/Nav_links'

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
      setError(true)
      return // Stop execution if the email is not valid
    }

    setError(false)

    console.log('The link was clicked.')
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen p-4 overflow-hidden text-center font-rubik ">
      <Nav_Bar />

      <Title_Slide />
      <main className="flex flex-col items-center justify-center w-full h-full gap-20">
        <section className="my-4">
          <article>
            <h1 class="text-[30px] leading-[40px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              A Simple Bookmark Manager
            </h1>
            <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex items-center justify-center gap-3 px-2 text-[14px] font-medium  leading-[28px] tracking-[.25px] mt-4 ">
              <Button
                text="Get it on Chrome"
                background="bg-blue"
                text_color="text-white"
              />

              <Button
                text="Get it on Firefox"
                background="bg-[#ebe8e8]"
                text_color="text-dark_blue"
              />
            </div>
          </article>
        </section>
        <section className="my-4">
          <article>
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              Features
            </h2>
            <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
              Our aim is to make it quick and easy for you to access your
              Features Our aim is to make it quick and easy for you to access
              your favorite websites. Your bookmarks sync between your devices
              so you can access them on the go.
            </p>
            <div className="flex flex-col mt-10 mb-10 ">
              <div className="p-4 border-t-2 border-b-2 ">
                <span className="p-2 hover:border-b-4 border-red ">
                  Simple Bookmarking
                </span>
              </div>
              <div className="p-4 border-b-2 ">
                <span className="p-2 hover:border-b-4 border-red ">
                  Speedy Searching{' '}
                </span>
              </div>
              <div className="p-4 border-b-2">
                <span className="p-2 hover:border-b-4 border-red ">
                  {' '}
                  Easy Sharing
                </span>
              </div>
            </div>
          </article>
        </section>
        <section className="my-4">
          <article>
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              Bookmark in one click
            </h2>
            <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <Button
              text="More Info"
              background="bg-blue"
              text_color="text-white"
            />
          </article>
        </section>
        <section className="my-4">
          <article>
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              Download the extension
            </h2>
            <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 mt-16">
              <BrowserCard
                title="Add to Chrome"
                img={Chrome}
                text="Minimum version 62"
              />
              <BrowserCard
                title="Add to Firefox"
                img={Firefox}
                text="Minimum version 55"
              />
              <BrowserCard
                title="Add to Opera"
                img={Opera}
                text="Minimum version 46"
              />
            </div>
          </article>
        </section>
        <section className="flex flex-col gap-8 px-4 my-4">
          <article className="flex flex-col items-center justify-center">
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              Frequently Asked Questions
            </h2>
            <p className=" text-[15px] leading-[25px]   text-grey ">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>

            <div className="w-full ">
              {questions.map((question) => (
                <QuestionsCard
                  key={question.id}
                  title={question.question}
                  content={question.answer}
                />
              ))}
            </div>
          </article>
          <div>
            <Button
              text="More Info"
              background="bg-blue"
              text_color="text-white"
            />
          </div>
        </section>

        <section className="flex flex-col w-screen gap-8 p-8 bg-blue">
          <article className="flex flex-col items-center justify-center">
            <p className="uppercase leading-10 tracking-[4.62px]  text-white">
              35,000+ already joined{' '}
            </p>
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-white">
              Stay up-to-date with what we’re doing
            </h2>
            <form onSubmit={handleClick} className="flex flex-col w-full gap-8">
              <div
                className={
                  'rounded-md relative' +
                  (error ? ' border-2 border-red bg-red' : '')
                }
              >
                {error && (
                  <i class="absolute top-4 right-3">
                    <img src={error_icon} alt="" />
                  </i>
                )}

                <input
                  value={email}
                  name=""
                  id=""
                  className="w-full rounded-md h-[48px] p-2 focus:outline-none"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                {error && (
                  <p className="px-2 text-left text-white">
                    Whoops, make sure it's an email
                  </p>
                )}
              </div>
              <Button
                text="Contact Us"
                background="bg-red"
                text_color="text-white"
              />
            </form>
          </article>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center w-screen h-full gap-10 p-10 bg-dark_blue">
        <img src={Logo} alt="" className="text-white " />
        <Nav_links />
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-[15px] leading-[25px] text-grey">
            Terms
          </a>
          <a href="#" className="text-[15px] leading-[25px] text-grey">
            Privacy
          </a>
          <a href="#" className="text-[15px] leading-[25px] text-grey">
            Contact
          </a>
        </div>
      </footer>

      <p class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </p>
    </div>
  )
}

export default App
