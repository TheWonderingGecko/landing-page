import arrow from '../assets/images/icon-arrow.svg'
import arrow_close from '../assets/images/icon-arrow-close.svg'

import { useState } from 'react'

const QuestionsCard = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    console.log(isClicked)
  }
  return (
    <div className="w-full text-left font-rubik text-[15px] leading-[35px] border-b-2 border-[#979797] py-4">
      <div className="flex items-center justify-between">
        {props.title}
        {!isClicked ? (
          <img
            src={arrow}
            alt=""
            className={'w-[16px] h-[8px] ' + (isClicked ? 'hidden' : '')}
            onClick={handleClick}
          />
        ) : (
          <img
            src={arrow_close}
            alt=""
            className="w-[16px] h-[8px] rotate-180"
            onClick={handleClick}
          />
        )}
      </div>
      {isClicked && (
        <p className="text-[15px] leading-[35px] text-grey">{props.content}</p>
      )}
    </div>
  )
}
export default QuestionsCard
