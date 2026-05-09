import React from 'react'

const Container = ({children ,className , ...props}) => {
  return (
    <div {...props} className= {`mx-auto container ${className}`}>
        {children}
    </div>
  )
}

export default Container