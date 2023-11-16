import React from 'react'
import { useRouteError } from 'react-router-dom'


export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p className='my-5'>Error gan</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
