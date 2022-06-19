import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = ()=> {
    const NavbarWrapper=styled.div`
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
        <NavbarWrapper>
             <StylesLink to="/">Home</StylesLink>
             <StylesLink to="/products">Products</StylesLink>
        </NavbarWrapper>
    )
}

