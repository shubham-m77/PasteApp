import { createSlice } from '@reduxjs/toolkit';

import { FaCheckCircle } from 'react-icons/fa'; 
const initialState = {
  paste:localStorage.getItem('paste')?JSON.parse(localStorage.getItem('paste')):[]
};
import toast from 'react-hot-toast';
export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      const paste=action.payload;
      state.paste.push(paste);
      localStorage.setItem("paste",JSON.stringify(state.paste));
      
      toast(
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaCheckCircle style={{ color: 'green', marginRight: '8px' }} /> Paste Created Successfully
        </div>
      );
    },
    updatePaste: (state,action) => {
      const {paste}=action.payload;
      const index=state.paste.findIndex((item)=>
      item._id===paste._id);
      if(index>0){
        state.paste[index]=paste;
        localStorage.setItem("paste",JSON.stringify(state.paste));
        toast.success("Paste Updated");
      }
    },
    resetPaste: (state, action) => {
     state.paste=[];
     localStorage.removeItem("paste");
    },
    removePaste: (state, action) => {
      const paste=action.payload;
      const index=state.paste.findIndex((item)=>
        item._id===paste._id);
        if(index>0){
          state.paste.splice(index,1);
          localStorage.setItem("paste",JSON.stringify(state.paste));
          toast.success("Paste Deleted");
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updatePaste, resetPaste,removePaste } = pasteSlice.actions

export default pasteSlice.reducer