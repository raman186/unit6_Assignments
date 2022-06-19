import React from "react";
import { useState,useEffect } from "react";
import { Form } from "./Form";
import { Table } from "./Table";

export const Main = () =>{

    const [allData,setAllData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState(false)
    const [page,setPage]=useState(1);
    const [lastPage,setLastPage]=useState()

    const addToDb =async (data)=>{
        try {
            
            await fetch(`http://localhost:3005/employeeDetails`,{
                method:"POST",
                body:JSON.stringify(data),
                headers:{"Content-Type" : "application/json"}
            });
            getData();
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const getData=async()=>{
        try {
            setLoading(true);
            let res=await fetch(`http://localhost:3005/employeeDetails`);
            let data=await res.json();
            setAllData(data);

            for(let pair of res.headers.entries()){
                if(pair[0]==='x-total-count'){
                    setLastPage(Math.ceil(pair[1]/2))
                }
            }
        } catch (error) {
            console.log(error)
            setError(true)
        }
        setLoading(false)
    }

    const handlePage=(val)=>{
        setPage(page+val)
        console.log(page)
    }

    useEffect(()=>{
        getData();
    },[page])

    return (
        <>
            <Form addToDb={addToDb}/>
            {
                loading ? (<h2>...Loading</h2>) 
                : error ? (<h2>Something Went Wrong</h2>)
                : (<Table allData={allData} handlePage={handlePage} page={page} lastPage={lastPage}/>)
            }
        </>
    )
}