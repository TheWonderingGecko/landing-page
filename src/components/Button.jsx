const Button = (props) => {
  return (
    <button
      className={
        'px-4 py-2  rounded-md shadow-lg h-12  ' +
        props.text_color +
        ' ' +
        props.background
      }
    >
      {' '}
      {props.text}
    </button>
  )
}
export default Button
