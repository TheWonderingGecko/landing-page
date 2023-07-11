const BrowserCard = (props) => {
  return (
    <div className="flex flex-col items-center  rounded-md shadow-2xl h-[371px] w-[280px] ">
      <div className="flex flex-col items-center justify-center w-full gap-2 p-8 ">
        <img src={props.img} alt="" />
        <span className="text-xl font-bold font-rubik">{props.title}</span>
        <span className="text-grey">{props.text}</span>
      </div>
      <div className="flex items-center justify-center w-full h-full border-t-8 border-dotted border-spacing-10">
        <button className="px-4 py-2 text-white rounded-md shadow-lg bg-blue">
          {' '}
          Add & install extension
        </button>
      </div>
    </div>
  )
}
export default BrowserCard
