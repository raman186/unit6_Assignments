import React,{useState,useEffect} from "react";
import { Table } from "./Table";
export const Form =({addToDb})=>{

    const [formData,setFormData]=useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        isMarried:false,
    })

    const handleChange=(e)=>{
        let {name,value,checked,type}=e.target;
        value=type=="checkbox"?checked:value;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit=(e,formData)=>{
        e.preventDefault();
        console.log(formData)
        addToDb(formData);
        setFormData({
            name:"",
            age:"",
            address:"",
            department:"",
            salary:"",
            isMarried:false,
        })
    }

    const {name,age,address,department,salary,isMarried}=formData;


    return (
        <>
            <h1>Add Details</h1>
            <form onSubmit={(e)=>handleSubmit(e,formData)}>
                <label>
                    Name
                    <input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter Your Name" />
                </label>
            
                <label>
                    Age
                    <input type="number" name="age" value={age} onChange={handleChange} placeholder="Enter Your Age" />
                </label>
            
                <label>
                    Address
                    <input type="text" name="address" value={address} onChange={handleChange} placeholder="Enter Your Address" />
                </label>
            

                Select Department
                <select name="department" value={department} onChange={handleChange}>
                    <option value="">Department</option>
                    <option value="Arts">Arts</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Science">Science</option>
                </select>
            
                <label>
                    Salary
                    <input type="number" name="salary" value={salary} onChange={handleChange} placeholder="Enter Your salary" />
                </label>
                <p>
                <input type="checkbox" checked={isMarried} onChange={handleChange} name="isMarried" />
                Married
                </p>
                <br />
                <input type="submit" />
            </form>
            {/* <Table /> */}
        </>
    )
}