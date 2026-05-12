import React from 'react'

const Container = ({children ,className , ...props}) => {
  return (
    <div {...props} className= {`mx-auto container px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
  )
}

export default Container