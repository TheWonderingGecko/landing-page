import BrowserCard from '../BrowserCard'
import Chrome from '/src/assets/images/logo-chrome.svg'
import Firefox from '/src/assets/images/logo-firefox.svg'
import Opera from '/src/assets/images/logo-opera.svg'
const Extensions_section = () => {
  return (
    <>
      <section className="my-4" id="browser_extensions">
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
    </>
  )
}
export default Extensions_section
