import GroceryInput from "./GroceryInput"
import React from 'react'
import GroceryList from "./Grocerylist"
import { v4 as uuid } from "uuid"

const Grocery = () => {
    const [data, setdata] = React.useState([])
    const handleAdd = (title) => {
        const groceryitem = {
            title: title,
            id: uuid()
        }
        setdata([...data, groceryitem])
    }
    const handleDelete = (id) =>{
        const updatedata = data.filter((item) =>
        item.id !==id);
        setdata(updatedata)
    }
    return <>
        <center style={{ margin: "10px" }}>
            <h1>Grocery App</h1>
            <GroceryInput handleAdd={handleAdd}  />
            <GroceryList data={data} handleDelete={handleDelete} /></center>
    </>
}
export default Grocery