import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Button } from '@chakra-ui/react';

export default function ShowUser () {
    const  {isAuth } = React.useContext(AuthContext);
    const  { loading } = React.useContext(AuthContext);

    return(
        loading ? (<Box textAlign='center'><Button isLoading ></Button></Box>) :
        (isAuth ? (<Box p={7} textAlign='center'> {`Login Status : ${isAuth}`}</Box>) 
                : (<Box p={7} textAlign='center' >{`Login Status : ${isAuth}`}</Box>))
    )
}