import React from 'react'

function IfElse() {
    const flag = true ;
    // there are also another ways to write if else so mostly we prefer ternary
  return (
    <div>
        {/* terinary operator */}
      {  flag ? <h4 style={{fontFamily:'initial', color:'chartreuse', fontSize:'20px' }}> this is if else  </h4> : <h4> this is false </h4>  }
    </div>
  )
}

export default IfElse ;
