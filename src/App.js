import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./Login.js"
import Overview from "./Overview.js"


const App = () => {
  return(
      <BrowserRouter>
           <div>
               {/* //Using exact tells react-router that you will only render this component if the URL matches exactly with the path definition.*/} 
               <Route path="/" component={Login} exact/>
               <Route path="/Overview" component={Overview}/>          
           </div>
      </BrowserRouter>
  )
  
}

export default App;
