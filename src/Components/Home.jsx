

import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { getAllTodos,  loading, sucess, reject} from "../Redux/action"


export const Home =()=>{
    const [inputValue,setInputValue]=useState("")

    const { todos } = useSelector((state)=>state.todos);


    const dispatch = useDispatch()
            
    
        const getData=async()=>{
            try {
                dispatch(loading())
                let res=await fetch(`http://localhost:3005/todos`)
                let data=await res.json();
                dispatch(sucess(data))
            } catch (error) {
                console.log(error)
                dispatch(reject())
                
            }
        };
        getData();
  
   
        const handleAdd =() =>{
            if(inputValue===""){
                alert("Please Enter Valid Todo ")
                    return
            }
            const payload ={
                title : inputValue,
                status : false,
            };
            fetch(`http://localhost:3005/todos`,{
                method:"POST",
                body:JSON.stringify(payload),
                headers : {"Content-Type":"application/json"}
            })
                .then((res)=> res.json())
                .then((res)=> {
                getData()
            })
        }
        getData()
    

    return(
        <>
            <div>
                <input type="text" 
                    placeholder="Enter Todo Item" 
                    value={inputValue} 
                    onChange={(e)=>setInputValue(e.target.value)}/>
                <button onClick={handleAdd}>Add Todo</button>
            </div>

            <div>
                {todos.map((todo)=>{
                return (<div style={{padding:"5px 10px 10px 10px", margin:"auto",marginTop:"20px", width:"50%",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
                        <p key={todo.id}>{todo.title}  {"----->"}  {todo.status ? " Completed ":" Not Completed "}</p>
                        <button style={{margin:"5px"}} onClick={()=>{}}>Change Status</button>
                        <button style={{margin:"5px"}} onClick={()=>{}}>Delete Todo</button>
                        <button style={{margin:"5px"}}>More Info.</button>
            </div>
                    
                )})}
            </div>
        </>
    )
}