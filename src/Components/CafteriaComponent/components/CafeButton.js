import React from 'react'
import { Link } from 'react-router-dom'

const CafeButton = () => {
  return (
    <div>
        <Link to='/cafteria'><button>Cafteria</button></Link>
        <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

export default CafeButton