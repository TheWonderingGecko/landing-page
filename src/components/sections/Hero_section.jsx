import Title_Slide from '../Title_Slide'
import Button from '../Button'

const Hero_section = () => {
  return (
    <>
      <section className="my-4">
        <Title_Slide />
        <article>
          <h1 class="text-[30px] leading-[40px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
            A Simple Bookmark Manager
          </h1>
          <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
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
    </>
  )
}
export default Hero_section
