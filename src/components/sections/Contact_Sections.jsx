import Button from '../Button'
import error_icon from '/src/assets/images/icon-error.svg'
import { useState } from 'react'

const Contact_Sections = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
      setError(true)
      return // Stop execution if the email is not valid
    }

    setError(false)

    console.log('The link was clicked.')
  }
  return (
    <>
      <section
        className="flex flex-col w-screen gap-8 p-8 bg-blue"
        id="contact"
      >
        <article className="flex flex-col items-center justify-center">
          <p className="uppercase leading-10 tracking-[4.62px]  text-white">
            35,000+ already joined{' '}
          </p>
          <h2 class="text-[24px] leading-[52px] font-semibold mb-4 tracking-[-.09px] text-white">
            Stay up-to-date with what we’re doing
          </h2>
          <form onSubmit={handleClick} className="flex flex-col w-full gap-8">
            <div
              className={
                'rounded-md relative' +
                (error ? ' border-2 border-red bg-red' : '')
              }
            >
              {error && (
                <i class="absolute top-4 right-3">
                  <img src={error_icon} alt="" />
                </i>
              )}

              <input
                value={email}
                name=""
                id=""
                className="w-full rounded-md h-[48px] p-2 focus:outline-none"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              {error && (
                <p className="px-2 text-left text-white">
                  Whoops, make sure it's an email
                </p>
              )}
            </div>
            <Button
              text="Contact Us"
              background="bg-red"
              text_color="text-white"
            />
          </form>
        </article>
      </section>
    </>
  )
}
export default Contact_Sections
