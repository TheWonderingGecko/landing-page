import QuestionsCard from '../QuestionsCard'
import questions from '../../assets/data/questions'
import Button from '../Button'

const Questions_sections = () => {
  return (
    <>
      <section className="flex flex-col gap-8 px-4 my-4" id="questions">
        <article className="flex flex-col items-center justify-center">
          <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-dark_blue">
            Frequently Asked Questions
          </h2>
          <p className=" text-[15px] leading-[25px]   text-grey ">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>

          <div className="w-full ">
            {questions.map((question) => (
              <QuestionsCard
                key={question.id}
                title={question.question}
                content={question.answer}
              />
            ))}
          </div>
        </article>
        <div>
          <Button
            text="More Info"
            background="bg-blue"
            text_color="text-white"
          />
        </div>
      </section>
    </>
  )
}
export default Questions_sections
