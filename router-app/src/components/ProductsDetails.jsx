import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const ProductsDetails =()=>{

    const Div=styled.div`
        // border:1px solid red;
        text-align:left;
        width:40%;
        margin:auto;
    `;

    const {productId}=useParams();
    const [productDetails,setDetails]=useState([])

    const getData=async()=>{
        try {
            let res=await fetch(`http://localhost:3000/products/${productId}`)
            let data=await res.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData().then((res)=>{
            setDetails(res)
        })
    },[])

    return (
        <Div>
            <h4>ID - {productDetails.id}</h4>
            <h4>Name - {productDetails.name}</h4>
            <h4>Price - ${productDetails.price}</h4>
        </Div>
    )
}