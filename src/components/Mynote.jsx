import React, { useState } from 'react'

const Mynote = (props) => {
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    const [expand,setExpand]=useState(false);
    const InputChange=(event)=>{
       const {name,value}=event.target;
       setNote((pre)=>{
            return {
                ...pre,
                [name]: value };
            
       });
       
    }
    const addEvent=()=>{
        props.onClickw(note);
        setNote({
            title:"",
            content:""
        })
    }
    const expandchange =()=>{
        setExpand(true);
    }
    const fullexpand =()=>{
        setExpand(false);
    }

  return (
    <>
        <div onDoubleClick={fullexpand} onClick={expandchange} className=' flex  flex-col w-1/3 mx-auto relative shadow-lg shadow-gray-500 rounded-lg mt-5 '>
            <input type="text" name='title' value={note.title} placeholder='Title' autoComplete='off' className='outline-none p-4 text-xl font-bold font-serif'  onChange={InputChange}/>
           { expand ?
           <>
           <textarea name="content" value={note.content}  cols="" rows="" placeholder='Writing a note...'  className='outline-none p-4' onChange={InputChange}></textarea>
            <button onClick={addEvent}  className="border-none font-bold outline-none bg-white text-4xl hover:bg-green-600 hover:text-white text-yellow-600 w-[60px] h-[60px] rounded-full cursor-pointer  shadow shadow-gray-900 absolute  right-3 -bottom-5" >+</button>
           </>
            : null}
        </div>
    </>
  )
}

export default Mynote