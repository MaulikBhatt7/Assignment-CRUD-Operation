import Header from "./Header";
import {Outlet} from 'react-router-dom'
export default function Layout(){
    return(<>

        <Header/>
        <div class="container">
        <div class="row">
            <Outlet/>
        </div>
        </div>
        
        
    </>)
}