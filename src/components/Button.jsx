import React from 'react'

const Button = ({children , className , type}) => {
  return (
      <button 
      className={`${type === "outline" ? "bg-white text-prymgreen hover:bg-green-200" : "bg-prymgreen text-white hover:bg-prymgreenhover"} flex justify-center items-center gap-1 py-2 px-3 active:scale-95 duration-300 rounded-md text-semimedium ${className} `} >
          {children}
      </button>
  )
}

export default Button
