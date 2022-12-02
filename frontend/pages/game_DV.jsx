import React from 'react'
import Link from 'next/link'

import { useState } from 'react'
import {ethers} from 'ethers'

const Game = () => {

  const [tokenId, setTokenId] = useState(0);

  const initCity = async (id) => {
    const message = `Initialize #${id} City NFT`;

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    let body = JSON.stringify({address: address, message: message, signature: signature});
    console.log(body);
    const response = await fetch(`https://dariovajda-bookish-winner-49j59r546w43jg4-8000.preview.app.github.dev/cities/${id}/initialize`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: body
    });
    console.log(response);
  };

  return (
    <div>
        <h1>Game</h1>
        <Link href='/'><a>Home</a></Link> <br />
        <Link href='/leaderboard'><a>Leaderboard</a></Link> <br />
        <input type="number" placeholder='id' value={tokenId} onChange={(e) => setTokenId(e.target.value) } />
        <h2 onClick={() => initCity(tokenId) }>Initialize city</h2>  { /* Ideja je da se pre nego sto je inicijalizovan grad prikaze nesto prazno i da na sred grada bude poruka da treba da se inicijalizuje i dugme tamo da bude i da ono poziva ovu funkciju. Ideja za prikaz tog praznog grada - neki bilbord na kojem to pise i moze on sam da se pritisne ili nesto slicno */}
    </div>
  )
}

export default Game