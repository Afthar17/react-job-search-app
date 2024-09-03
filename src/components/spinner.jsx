import React from 'react'
import { ClipLoader } from 'react-spinners'

const override ={
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({load}) => {
  return (
    <ClipLoader 
    color='#4338ca'
    loading = {load}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner