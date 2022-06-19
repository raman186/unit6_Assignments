import React from "react";

export const Table =({allData,handlePage,page,lastPage})=>{
    return (
        <>
            <h1 style={{marginTop:'30px'}}>Employee Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Married</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.department}</td>
                                    <td>{item.isMarried ? 'Yes' : 'No'}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <button onClick={()=>handlePage(-1)} disabled={page===1}>Previous</button>
                <button onClick={()=>handlePage(1)} disabled={page===lastPage}>Next</button>
            </table>
        </>
    )
} 