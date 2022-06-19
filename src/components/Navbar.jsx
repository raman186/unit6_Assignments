import React from "react"
import { Box,Button } from '@chakra-ui/react'
import { AuthContext } from "../context/AuthContext";

export default function Navbar()
{
    const  { isAuth } = React.useContext(AuthContext);
    const { tokenNumber } = React.useContext(AuthContext);

    const  { Api } = React.useContext(AuthContext);
    const  { toggle } = React.useContext(AuthContext);
    return(

        <Box bg='#abcdef' w='100%' p={4} textAlign='right' >
        {   
            isAuth ?

             <Box>{`Token - `} {tokenNumber} <Button onClick={() => {toggle()}} >Logout</Button> </Box>
             : <Button onClick={() => {Api()}} >
                Login
                </Button>
        }
    </Box>
    )
}