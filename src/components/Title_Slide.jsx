import title_image from '../assets/images/illustration-hero.svg'

const Title_Slide = () => {
  return (
    <div className="relative flex items-center justify-center my-9 ">
      <img src={title_image} alt="" className="z-10 " />
      <span className="h-[203px] w-[557px] bg-blue absolute bottom-[-10px] right-[-260px] rounded-full"></span>
    </div>
  )
}
export default Title_Slide
