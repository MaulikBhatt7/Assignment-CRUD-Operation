import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function AddEmployee(){
    const navigate = useNavigate();
    const [data,setData]=useState({});
    const param = useParams();
    const apiURL = "https://632158b682f8687273afe9c3.mockapi.io/EmployeeDetails";

    useEffect(()=>{
        if(param.id>0){
            fetch(apiURL+"/"+param.id)
            .then((res)=>res.json())
            .then((data)=>setData(data))
        }
    },[])
    return(<>

        <div className='container2'>
        <table cellPadding={20}>
        <tr>
            <td class="font">Employee's Name</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder="ex: John" type="text" value={data.EmployeeName} onChange={(e)=>{
                    setData({...data,EmployeeName:e.target.value})
                }}/>
            </td>
            
        </tr>
        
        <tr>
            <td class="font">Employee's Image Address</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='ex: https://john.jpeg' type="text" value={data.EmployeeImage} onChange={(e)=>{
                    setData({...data,EmployeeImage:e.target.value})
                }}/>
            </td>
        </tr>

        <tr>
            <td class="font">Employee's Mobile no.</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='ex: 1234567890' type="text" value={data.EmployeeMobile} onChange={(e)=>{
                    setData({...data,EmployeeMobile:e.target.value})
                }}/>
            </td>
            
        </tr>

        <tr>
            <td class="font">Employee's Code</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='ex: 1254' type="text" value={data.EmployeeCode} onChange={(e)=>{
                    setData({...data,EmployeeCode:e.target.value})
                }}/>
            </td>
            
        </tr>

        <tr>
            <td><button class="button2" onClick={()=>{
                if(!param.id>0){
                        fetch(apiURL, {
                            method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                        .then((res)=>{
                            navigate("/Employees")
                        })
                    }
                    else{
                        fetch(apiURL+"/"+param.id, {
                            method:"PUT",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                        .then((res)=>{
                            navigate("/Employees")
                        })
                    }
                }
            }>
                {!param.id>0 && "Add"}
                {param.id>0 && "Edit"} Faculty
            </button></td>
        </tr>
        </table></div>      
    </>)
}