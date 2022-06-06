import React from "react";
import '../index.css';
 
export default function Profile(){
    let imgURL='https://avatars.githubusercontent.com/u/102738774?s=400&u=82f3d4841c5ba7839eaa3f905c53202bcceed0b3&v=4';
    let name='Raman Goyal';
    let initage=23;
    const [age, setage] = React.useState(initage);
     const increment = () => {
    setage(age + 1);
  };
  const decrement = () => {
    if (age === 0) {
      alert("Age can't be negative.");
    } else setage(age - 1);
    };
    const [Text,setText]=React.useState('Show')
    
   let hideData;
   
    
    const extraDetails=()=>{
        if(Text==='Show'){
            setText('Hide');
            hideData='Location: Hisar';
            
        }
        
        else{
            setText('Show');
            hideData='';

        }
    }



    return(
        <>
            <div>
                <img src={imgURL} className='profileImage'></img>
                <h2>Name: {name}</h2>
                <h2>Age : {age}</h2>
            </div>
            <div className="ageButtons">
                <button  onClick={increment}>Increase Age</button>
                <button  onClick={decrement}>Decrease Age</button>
            </div>
            <div className="details">
                <button id="details" onClick={extraDetails}>{Text} More Details</button>
            </div>
            <div><h2>{hideData}</h2></div>
            
        </>
    )
}