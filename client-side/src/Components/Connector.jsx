import React from 'react'
// import {ethers} from 'ethers';
import { ethers } from "ethers";
import {providers} from 'ethers'
// import { JsonRpcProvider } from 'ethers';
function Connector() {
  return (
    <>
        <button onClick={async ()=>{
            alert('Connected to MetaMask');
          if (window.ethereum) {
            try {
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              await provider.send('eth_requestAccounts', []); // Request access to MetaMask

              const signer = provider.getSigner();
              const address = await signer.getAddress();
              console.log('Address:', address);
            } catch (error) {
              console.error('Error connecting to provider:', error);
            }
          } else {
            alert('MetaMask is not installed');
          }
        }}
      >
        Vote now
      </button>
    </>
  )
}

export default Connector