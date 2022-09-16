import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Layout';
import Home from './Home';
import AllEmployees from './AllEmployees';
import EmployeeById from './EmployeeById';
import AddEmployee from './AddEmployee';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/Employees" element={<AllEmployees/>}></Route>
            <Route path="/Employees/:id" element={<EmployeeById/>}></Route>
            <Route path="/AddEmployee" element={<AddEmployee/>}></Route>
            <Route path="/Employees/Edit/:id" element={<AddEmployee/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

