const GroceryList = ({data, handleDelete}) =>{
    return <>
    {
        data.map((item) =>(
        <div style={{display:"gird"}}>
            <h1 key= {item.id} >{item.title}</h1>
        <button onClick={() => handleDelete(item.id) } >Delete</button></div>
        ))
    }
    </>
}
export default GroceryList