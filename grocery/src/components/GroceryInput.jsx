import React from 'react'
const GroceryInput = ({handleAdd}) => {
    const [title,settitle]= React.useState("")

    return <>
    <input placeholder="Add Grocery" type="text" value={title} onChange={(event)=>settitle(event.target.value)}  />
    <button onClick={() => handleAdd(title)}>Add Grocery</button>
    </>
}
export default  GroceryInput