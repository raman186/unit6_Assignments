import React from "react";
 
const Todo=(props)=>{
    
    const {title, status}=props;
    let style;
    if (status) {
        style = { color: "green" };
      } else style = { color: "red" };
    return(
        <>
            <h3 style={style}>{title}</h3>
        </>
    )
}
export default Todo;