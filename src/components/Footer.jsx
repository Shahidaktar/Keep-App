import React from 'react'

const Footer = () => {
const yr=new Date().getFullYear();
  return (
    <>
        <footer className='bottom-0 inset-x-0 p-4 fixed text-center'>
            <h1>Copyright by Shahid {yr}</h1>
        </footer>
    </>
  )
}

export default Footer