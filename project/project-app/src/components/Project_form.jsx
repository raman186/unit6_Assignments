
import React from "react";

const ProjectForm=()=> {
  const [formData, setFormData] = React.useState("");
  
  
  const addData=()=>{
    const payload = {
        title: title,
        gender: gender,
        price:price,
        category:category,
        image:image
    };

fetch(`http://localhost:3001/projects`, {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    "content-type": "application/json"
  }
})
  .then((res) => res.json())

  .catch((err) => {
    console.log(err);
  })
}

  

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: value });
  };


  const { title,gender, price, category, image } = formData;
  return (
    <div className="form">
      <h1>Add New Product</h1>
      <br />
      <form onSubmit={addData}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={handleChange}
          value={title}
          required
        />
        <br />
        <select name="gender" value={gender} required>
            <option value="M">Male</option>
            <option value="F">Female</option>
        </select>
        <br />

        <input
          type="text"
          placeholder="Enter price"
          name="price"
          onChange={handleChange}
          value={price}
          required
        />
        <br />
        
        <input
          type="text"
          placeholder="Enter category"
          name="category"
          onChange={handleChange}
          value={category}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter image url"
          name="image"
          onChange={handleChange}
          value={image}
          required
        />
        
        <br />
        <input id='ADD' type="submit" value="Add to List" />
      </form>
    </div>
  );
}


export default ProjectForm;