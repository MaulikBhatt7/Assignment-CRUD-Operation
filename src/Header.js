import {Link} from 'react-router-dom';
import './style.css';
export default function Header(){
    return(<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img height="70px" width="150px%" src="https://darshan.ac.in/Content/media/DU_Logo.svg"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/" class="btn"><a class="nav-link font2" href="#">Home <span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
            <Link to="/Employees" class="btn"><a class="nav-link font2" href="#">All Employees</a></Link>
            </li>

            <li class="nav-item">
            <Link to="/AddEmployee" class="btn"><a class="nav-link font2" href="#">Add Employee</a></Link>
            </li>
            </ul>
        </div>
        </nav>
       
    </>)
}