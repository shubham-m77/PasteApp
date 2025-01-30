import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FaSearchengin,FaEye,FaPenToSquare,FaTrashCan,FaCopy,FaShareFromSquare} from 'react-icons/fa6'; 
import { format } from 'date-fns';
import { removePaste } from '../Redux/pasteSlice.jsx';
import toast from 'react-hot-toast';
import { RWebShare } from "react-web-share";
import { MdDateRange } from "react-icons/md";

const Paste = () => {
  // variables
  const pastes=useSelector((state)=>state.paste.paste);
  const [searchTerm,setSearchTerm]= useState('');
  const dispatch=useDispatch();
  const filterData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
  // functions
  // function viewHandler(){

  // }
  // function editHandler(){
    
  // }
  function deleteHandler(paste) {
    dispatch(removePaste(paste));  // Pass the entire paste object
    toast.success('Paste Deleted');
  }
 
  // }
  return (
    <div>
    <h1 className='text-center'>All Pastes</h1>
    <div className="search-container ms-2 px-3">
        <input
          type="search"
          placeholder="Search Your Pastes"
          className="search-input w-50 ps-5 rounded-pill pe-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
        <FaSearchengin className="search-icon" /> {/* Search icon inside the input */}
      </div>
      <div className='d-flex flex-column px-4'>
    { filterData.length>=0 && filterData.map((paste)=>(
      <div key={paste._id} className='card mb-2 px-3 py-1'><div className="cardHeader"><label>{paste.title} </label> <div className='btns d-flex flex-row'>
      <button className='icon-btn' data-bs-toggle="tooltip" title="View Paste"><a href={`/paste/${paste?._id}`}><FaEye className='text-dark icons'/> </a></button>
      <button className='icon-btn' title="Edit Paste"><a href={`/?pasteId=${paste?._id}`}><FaPenToSquare className='text-dark icons'/></a></button>
      <button className='icon-btn' title="Delete" onClick={(paste)=>deleteHandler(paste?._id)}><FaTrashCan className='text-danger icons'/></button>
      <button className='icon-btn' title="Copy Text" onClick={()=>{navigator.clipboard.writeText(paste?.content)
        toast.success("Copied to Clipboaard")
      }}><FaCopy className='text-primary-emphasis icons'/></button>
      <RWebShare
                data={{
                    text: paste.content,
                    url: "http://localhost:5173/paste",
                    title:paste.title ,
                }}
                onClick={() =>
                    console.log("shared successfully!")
                }
            >
                <button className='icon-btn' title="Share" ><FaShareFromSquare className='text-dark icons'/></button>
            </RWebShare>
      </div></div><p className="date ms-auto"><MdDateRange className=""/>{format(paste.createdBy,"d-M-yyyy")}</p>
      <div className="content">{paste.content}</div>
      </div>
    ))}
      </div>
      </div>
  )
}

export default Paste
