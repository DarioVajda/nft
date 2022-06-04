import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const game = () => {
  const router = useRouter();
  const route = router.query;
  let id;

  const [idValidity, setIdValidity] = useState(0); // 0 - loading, 1 - valid, 2 - not valid

  const isValidID = async () => {
    id = parseInt(id);
    console.log(id);
    console.log(typeof id);
    if(typeof id !== 'number') {
      setIdValidity(2);
      return;
    }

    let num = await (await fetch('http://localhost:8000/count')).json();
    num = num.count;

    if( 
      Object.values(route).length === 1 && 
      route.id != undefined && 
      id >= 0 && 
      id < num
    ) {
      console.log('setIdValidity(1);');
      setIdValidity(1);
    }
    else {
      console.log('setIdValidity(2);');
      setIdValidity(2);
    }
  }

  useEffect(() => {
    if(Object.values(route).length === 0) return;

    console.log(route);
    id = route.id;
    isValidID();

  }, [route]);

  if(idValidity === 0) return (
    <div>Loading...</div>
  )
  else if(idValidity === 1) return (
    <div>{route.id}</div>
  )
  else return (
    <div>Error</div>
  )

  
}

export default game