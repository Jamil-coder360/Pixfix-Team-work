import React from 'react'

const Button = ({Tagname= "button", children ,className , ...props}) => {
  return (
    <Tagname {...props} className={`bg-home text-white py-3 md:py-4 lg:py-5 px-5 md:px-6 lg:px-7.5 flex items-center justify-center gap-2 md:gap-2.5 text-sm md:text-base font-semibold rounded-md transition-colors hover:bg-orange-600 ${className}`}>
        {children}
    </Tagname>
  )
}

export default Button