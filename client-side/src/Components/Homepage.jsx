import React from 'react'
import Navbar from './Navbar'

function Homepage(props) {
    const candidates=[]
  return (
    <>
       <Navbar/>
       <div className='justify-center items-center align-items text-center'>
        <p className='text-4xl m-8 font-bold text-cyan-500'>Welcome!</p>
        <p>Metamask account-{props.account}</p>
         
        <p>Time remaining-{props.timeRemaining}</p>
        <div className='justify-center items-center align-items text-center container mx-auto p-4'>
        <table className="table-auto mx-auto border-collapse border border-gray-200 ">
                <thead>
                <tr >
                    <th >Candidate id</th>
                    <th>Candidate name</th>
                    <th>No. of votes</th>
                </tr>
                </thead>
                <tbody>
                {candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                {/* {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))} */}
                </tbody>
            </table>
            </div>
       </div>
    </>
  )
}

export default Homepage