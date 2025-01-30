import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updatePaste,addToPaste } from '../Redux/pasteSlice';
const Home = () => {
  const [title,setTitle]=useState('');
  const [value,setValue]=useState('');
  const [searchParam,setSearchParam]= useSearchParams();
  const pasteId=searchParam.get("pasteId");
  const dispatch=useDispatch();
  const allPaste=useSelector((state)=>state.paste.paste);
  useEffect(() => {
    if(pasteId){
      const paste=allPaste.find((p)=>p._id===pasteId);
      setTitle(paste.title);
    setValue(paste.content );
    }
  }, [pasteId])
  
  function createPaste(){
    const paste={title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createdBy:new Date().toISOString(),
    }
    console.log("Creating paste:", paste); // Check if this logs the correct data
    console.log("Creating paste:", paste); // Check if this logs the correct data

  if (pasteId) {
    // Update existing paste
    dispatch(updatePaste({paste}));
    // toast.success("Paste Updated");
  } else {
    // Create new paste
    dispatch(addToPaste(paste));
    // toast.success("Paste Created Successfully");
  }
  // After creation/updation, clear form fields and reset pasteId
  setTitle('');
  setValue('');
  setSearchParam({});
  }
  return (
    <div className='homeContainer'>
      <p className='mt-2 mb-2 text-center'>Create Paste Title</p>
      <div className='d-flex flex-row justify-content-center'>
      <input type="text" placeholder='Enter Paste Name' onChange={(e)=>setTitle(e.target.value)} className="form-control w-25 rounded-pill" value={title}/>
    </div>
    <div className="pasteBox d-flex justify-content-center mt-3 flex-column align-items-center">
      <textarea name="" className='pasteArea form-control w-50 shadow-sm' value={value} rows="15" onChange={(e)=>setValue(e.target.value)} placeholder='Enter your pastes/notes'></textarea>
      <button className='btn btn btn-primary rounded-pill mt-2' onClick={createPaste}>{pasteId?"Update Paste":"Create Paste" }</button>
    </div>
    </div>
  )
}

export default Home
