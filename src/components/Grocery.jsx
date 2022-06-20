import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";

const Grocery = () => {
  const [allData, setAllData] = useState([]);

  const addToDb=async (data)=>{
    try {
        await fetch(` http://localhost:3005/grocery-items`,{
             method:"POST",
             body:JSON.stringify(data),
             headers:{"Content-Type":"application/json"}
        });
       getData();
    } catch (error) {
        console.log(error)
    }
  }

  const getData=async()=>{
    try {
        let res=await fetch(`http://localhost:3005/grocery-items`);
        let data=await res.json();
        setAllData(data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    getData();
  },[])
  

  const handleDelete =async (id)=>{
    
        await   fetch(` http://localhost:3005/grocery-items/`+id,{
             method:"DELETE"
        });
        getData();
   
}
  return (
    <>
      <h1 style={{ color: "blueviolet" }}>Grocery</h1>
      <GroceryInput addToDb={addToDb} />
      <h2 style={{ color: "blueviolet" }}>Grocery list</h2>
      <GroceryList allData={allData} handleDelete={handleDelete} />
    </>
  );
};
export default Grocery;
