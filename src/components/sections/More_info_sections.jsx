import Button from '../Button'

const More_info_sections = () => {
  return (
    <>
      <section className="my-4" id="more_info">
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
    </>
  )
}
export default More_info_sections
