import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/000-KunalPal')
    .then(response => response.json())
    .then(data => setData(data))
  },[])
  return (
    <div className='h-screen flex items-center justify-center flex-col'> 
    <img src={data.avatar_url} alt='Github image' width={300} className=''></img>
    <h1 className='text-4xl'>Github Followers: {data.followers} </h1>
    </div>
  )
}

export default Github