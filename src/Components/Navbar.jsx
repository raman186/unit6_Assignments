import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";


export const Navbar=()=>{
    const NavWrapper=styled.div`
       display:flex;
        justify-content:space-evenly;
        background:#0000ff;
        color:#aeaeae;
        padding:15px;
    `;

    const StylesLink =styled(Link)`
        color:#ffffff;
        font-size:600;
        text-decoration:none;
        padding:6px;

        :hover{
            color:#abcdef;
            background:#0000ee;
        }
    `;
    return (
        <NavWrapper>
           <StylesLink to="/">Home</StylesLink>
        </NavWrapper>
    )
}