import React from 'react'

const Note = (props) => {

  const deleteitem=()=>{
    props.setitem(props.id);
  }
  return (
    <>
    
    <div className='relative shadow-md mx-5 shadow-gray-600  mt-12 space-y-3 p-2 h-36'>
            <h1 className='font-serif font-bold  capitalize'>{props.title}</h1>
            <p className='capitalize'>{props.content}</p>
            <button onClick={deleteitem}  className=" absolute right-2 bottom-3 border-none hover:bg-red-600 font-bold outline-none bg-white  text-yellow-600 hover:text-white  w-[25px] h-[25px] rounded-full cursor-pointer ml-5 shadow shadow-gray-900" >x</button>
        </div>
    
        
    </>
  )
}

export default Note