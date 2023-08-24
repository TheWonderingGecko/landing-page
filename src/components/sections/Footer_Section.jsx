import Nav_links from '../Nav_links'
import Logo from '/src/assets/images/footer-logo.svg'

const Footer_Section = () => {
  return (
    <>
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
        <p class="attribution text-white">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  )
}
export default Footer_Section
