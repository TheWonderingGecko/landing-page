import BrowserCard from './components/BrowserCard'
import Nav_Bar from './components/Nav_Bar'
import Title_Slide from './components/Title_Slide'
import Chrome from '/src/assets/images/logo-chrome.svg'
import Firefox from '/src/assets/images/logo-firefox.svg'
import Opera from '/src/assets/images/logo-opera.svg'

function App() {
  return (
    <div className="w-screen p-4 overflow-hidden text-center font-rubik ">
      <Nav_Bar />

      <Title_Slide />
      <main className="w-full h-full">
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
              <button className="px-4 py-2 text-white rounded-md shadow-lg bg-blue">
                {' '}
                Get it on Chrome
              </button>
              <button className="px-4 py-2 text-dark_blue rounded-md bg-[#ebe8e8] font-medium shadow-lg">
                {' '}
                Get it on Firefox
              </button>
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
            <button className="px-4 py-2 text-white rounded-md shadow-lg bg-blue">
              More Info
            </button>
          </article>
        </section>
        {/* Intelligent search Our powerful search feature will help you find saved
        sites in no time at all. No need to trawl through all of your bookmarks.
        More Info Share your bookmarks Easily share your bookmarks and
        collections with others. Create a shareable link that you can send at
        the click of a button. More Info  */}
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
        <section className="my-4">
          <article>
            <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
              Frequently Asked Questions
            </h2>
            <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </article>
        </section>
        Frequently Asked Questions Here are some of our FAQs. If you have any
        other questions you’d like answered please feel free to email us.
        {/* <!-- Question 1 --> */}
        What is Bookmark?
        {/* <!-- Answer 1 --> */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare
        mattis.
        {/* <!-- Question 2 --> */}
        How can I request a new browser?
        {/* <!-- Answer 2 --> */}
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
        ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
        convallis ultricies. Mauris augue massa, ultricies non ligula.
        Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        {/* <!-- Question 3 --> */}
        Is there a mobile app?
        {/* <!-- Answer 3 --> */}
        Sed consectetur quam id neque fermentum accumsan. Praesent luctus
        vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
        quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et
        ultricies bibendum.
        {/* <!-- Question 4 --> */}
        What about other Chromium browsers?
        {/* <!-- Answer 4 --> */}
        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi,
        at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non
        ut velit. More Info 35,000+ already joined Stay up-to-date with what
        we’re doing Contact Us Features Pricing Contact
      </main>
      <footer>
        <p class="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </div>
  )
}

export default App
