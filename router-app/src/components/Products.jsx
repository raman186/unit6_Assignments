import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Products =()=>{
    const Table=styled.table`
        th,td{
            border:1px solid #aeaeae;
            padding:10px;
            letter-spacing:.2px
        }
        margin:auto;
        margin-top:40px;
        border-collapse:collapse;
    `;

    const [productDetails,setDetails]=useState([]);

    const getData=async()=>{
        try{
            let res=await fetch(`http://localhost:3000/products`)
            let data= await res.json();
            console.log(data)
            setDetails(data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getData();
    },[])

    return (
        <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>More</th>
            </tr>
        </thead>
        <tbody>
            {
                productDetails.map((item)=>{
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td><Link to={`/products/${item.id}`}>More</Link></td>
                        </tr>
                    )
                })
            }
        </tbody>
       </Table>

    )
}