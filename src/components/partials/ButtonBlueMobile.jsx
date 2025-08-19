function ButtonBlueMobile({ href, onClickFunc, children, isBgWhite}) {
  return (
    <>
          <a
            href={href}
            onClick={onClickFunc}
            className={`btn btn-primary text-xs text-white font-bold transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 border-0 shadow-none flex flex-col leading-tight items-center ${isBgWhite ? 'hover:shadow-md' : ''}`}
          >{children}</a>
    </>
  )
}

export default ButtonBlueMobile
