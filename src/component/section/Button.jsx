import React from 'react'

const Button = ({Tagname= "button", children ,className , ...props}) => {
  return (
    <Tagname {...props} className={` bg-home text-white py-5 px-7.5 flex items-center justify-center gap-2.5 ${className}`}>
        {children}
    </Tagname>
  )
}

export default Button