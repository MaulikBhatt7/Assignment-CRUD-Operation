import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';

export default function EmployeeByIdId(){
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const param = useParams();
    const apiURL = "https://632158b682f8687273afe9c3.mockapi.io/EmployeeDetails"
    useEffect(()=>{
        fetch(apiURL+"/"+param.id, {method:"GET"})
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    return(<>

        {/* <div class="container2">
        <table cellPadding={10}>
            <tr>
                <td colSpan={3} align="center"><img height={300} width={300} src={data.EmployeeImage}></img></td>
            </tr>
            <tr>
                <td><span class="font">Name</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.EmployeeName}</span></td>
            </tr>
            <tr>
                <td><span class="font">Code</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.EmployeeCode}</span></td>
            </tr>
            <tr>
                <td><span class="font">Email</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.EmployeeEmail}</span></td>
            </tr>
            
        <tr>
            <td>
                <button class="button" onClick={()=>{
                    fetch(apiURL+"/"+param.id, {method: "Delete"})
                    .then((res)=>{
                        navigate("/Employees")
                    })
                }}>Delete</button>
            </td>
           
            <td>
                <button class="button" onClick={()=>{
                    navigate("../Employees/Edit/"+param.id)
                }}>Edit</button>
            </td>
            
        </tr>
        </table></div> */}


                <div class="col">
                <div class="card card-id">
                <img src={data.EmployeeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <table class="detail" cellPadding="10px">
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{data.EmployeeName}</td>
                        </tr>
                        <tr>
                            <td>Code</td>
                            <td>:</td>
                            <td>{data.EmployeeCode}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{data.EmployeeEmail}</td>
                        </tr>
                        <tr>
                            <td>Mobile no.</td>
                            <td>:</td>
                            <td>{data.EmployeeMobile}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button class="button" onClick={()=>{
                                    fetch(apiURL+"/"+param.id, {method: "Delete"})
                                    .then((res)=>{
                                        navigate("/Employees")
                                    })
                                }}>Delete</button>
                            </td>
                        
                            <td>
                                <button class="button" onClick={()=>{
                                    navigate("../Employees/Edit/"+param.id)
                                }}>Edit</button>
                            </td>
                            
                        </tr>
                    </table>
                    
                </div>
                </div>
                </div> 
    </>)
}