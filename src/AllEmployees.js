import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
export default function AllEmployees(){
    const [data,setData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://632158b682f8687273afe9c3.mockapi.io/EmployeeDetails")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    const Employees = data.map((Employee)=>{
        return(<>

            {/* <div class="container">
               
                    <div class="col-4 fac">
                        <img class="img" src={Employee.EmployeeImage}></img><br/><br/>
                        <span class="font" onClick={()=>{
                            navigate("../Employees/"+Employee.id);
                        }}>{Employee.EmployeeName}</span>

                    </div>
                
            </div> */}
            
                {/* <div class="card">
                <div className="emp-image-div"><img className="emp-image" src={Employee.EmployeeImage} class="card-img-top" alt="..."/></div>
                <div class="card-body">
                    <h5 class="card-title">{Employee.EmployeeName}</h5>
                    <p class="card-text">

                    </p>
                    <span class="font" onClick={()=>{
                            navigate("../Employees/"+Employee.id);
                    }}>
                    <a href="#" class="btn">More Detais</a></span>
                </div>
                </div> */}

                
                
                <div class="col-4">
                <div class="card">
                <img src={Employee.EmployeeImage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">Name : {Employee.EmployeeName}</h4>
                    <p class="card-text">Code : {Employee.EmployeeCode}</p>
                    <span class="font" onClick={()=>{
                            navigate("../Employees/"+Employee.id);
                    }}>
                    <a href="#" class="btn mr-2"><i class="fas fa-link"></i>More Details</a></span>
                    
                </div>
                </div>
                </div>   
            
            
        </>)
    })
    return(<>
        {Employees}
    </>)
}