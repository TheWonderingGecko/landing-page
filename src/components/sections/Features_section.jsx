const Features_section = () => {
  return (
    <>
      <section className="my-4" id="features">
        <article>
          <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
            Features
          </h2>
          <p className=" text-[15px] leading-[25px]  px-8  text-grey ">
            Our aim is to make it quick and easy for you to access your Features
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go.
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
    </>
  )
}
export default Features_section
