import facebook_icon from '../assets/images/icon-facebook.svg'
import twitter_icon from '../assets/images/icon-twitter.svg'

const Nav_links = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-col items-center justify-center gap-4 text-[15px] font-normal uppercase  leading-[28px] tracking-[.25px] text-white ">
          <li className="hover:text-blue">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-blue">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-blue">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <nav id="social_link_navigation">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook_icon} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter_icon} alt=" twitter icon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Nav_links
