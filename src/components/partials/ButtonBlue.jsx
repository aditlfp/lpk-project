
function ButtonBlue({href, navigateToLink, title, className}) {
  return (
    <>
        <a
            href={href}
            onClick={navigateToLink}
            target='_blank'
            className={`btn btn-primary text-white font-bold p-4 md:p-6 transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 border-0 shadow-none ${className ? className : 'btn-xl text-sm md:text-2xl'}`}
        >
            {title}
        </a>
    </>
  )
}

export default ButtonBlue
