import React from "react";

const ProductList=()=>{

    const [products,setProducts]=React.useState([]);

    const getData=()=>{
        fetch(`http://localhost:3001/projects`)
        .then((res) => res.json())
        .then((res) => {
            setProducts(res);
        })
        .catch((err) => {
            console.log(err)
            setProducts([]); 
        });
    };

    React.useEffect(() => {
        getData();
    }, []);


    return(
        <div className="list">
           <h1>Product List</h1> 
           <div className="products">
            {products.map((product)=>(
                <div className="productDetails" key={product.id}>  
                    <img src={product.image}></img>
                    <h5>{product.title}</h5>
                    <p>Gender - {product.gender}</p>
                    <p>Price - {product.price}</p>
                    <p>Category - {product.category}</p>
                </div>
            ))}
           </div>
        </div>

    )
}

export default  ProductList