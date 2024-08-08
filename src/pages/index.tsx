import { useRouter } from "next/router";
import { useEffect } from "react";
import React from 'react'



const index = () => {
  const router = useRouter();
  useEffect(() =>{
    router.push('/dashboard')
  },[])
  return (
    <>
    </>
  )
}

export default index;