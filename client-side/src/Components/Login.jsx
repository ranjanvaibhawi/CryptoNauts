import React from 'react'
const Login=(props)=> {
  return (
    <>
    <div className='h-1/2 w-3/4 h-screen justify-center items-center align-items m-32'>
       <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure>
    <img
      src="https://builtin.com/sites/www.builtin.com/files/2022-09/blockchain-voting.jpg"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Voting has begun!</h2>
    <p>Click the button to start the voting procedure</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-cyan-600 hover:bg-cyan-500" onClick = {props.connectWallet} >Vote now</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Login