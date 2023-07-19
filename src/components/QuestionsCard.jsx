import arrow from '../assets/images/icon-arrow.svg'

const QuestionsCard = (props) => {
  return (
    <div className="w-full text-left font-rubik text-[15px] leading-[35px]   ">
      {props.title}
      <img src={arrow} alt="" />
    </div>
  )
}
export default QuestionsCard
