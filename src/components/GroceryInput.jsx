import React, { useState } from "react";

const GroceryInput = ({ addToDb }) => {

  const [detail,setDetail]=useState({
    title:"",
  })

  const handleChange=(e)=>{
    let {name,value}=e.target;
    setDetail({...detail,[name]:value})
  }

  const handleAdd=(e,detail)=>{
    addToDb(detail);
    setDetail({
        title:'',
    })
  }

  const {title}=detail;
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Enter Grocery Items"
        value={title}
        name='title'
        onChange={handleChange}
      />

      <button
        onClick={(e) => {
          handleAdd(e,detail);
         // setTitle("");
        }}
      >
        {" "}
        Add to List{" "}
      </button>
    </div>
  );
};
export default GroceryInput;
