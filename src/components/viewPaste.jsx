import React, {useEffect, useState } from 'react'
import { FaCopy} from 'react-icons/fa6'; 
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams,useParams } from 'react-router-dom';
import { updatePaste,addToPaste } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';
const viewPaste = () => {
  const {id}=useParams();
const allPaste=useSelector((state)=>state.paste.paste);
const paste=allPaste.filter((p)=>p._id===id)[0];
  return (
    <div className='homeContainer'>
      <p className='mt-2 mb-2 text-center'>Paste</p>
      <div className='d-flex flex-row justify-content-center'>
      <input type="text" placeholder='Enter Paste Name' onChange={(e)=>setTitle(e.target.value)} className="form-control w-25 rounded-pill" value={paste.title} disabled/>
    </div>
    <div className="d-flex justify-content-center mt-3 flex-column align-items-center">
      <div className="w-50 position-relative">
      <textarea name="" className='paste-area form-control shadow-sm' value={paste.content} rows="15" onChange={(e)=>setValue(e.target.value)} disabled placeholder='Enter your pastes/notes'></textarea>
      <a className='copy-btn' title="Copy Text" onClick={()=>{navigator.clipboard.writeText(paste.content);
        toast.success("Copied to Clipboaard");
      }}><FaCopy className='text-primary-emphasis icons'/></a>
    </div>
    </div></div>
  )
}

export default viewPaste
