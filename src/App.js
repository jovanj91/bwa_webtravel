// import LandingPage from "pages/LandingPage";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <LandingPage/>
//     ),
//   }
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import "assets/scss/style.scss"
import LandingPage from 'pages/LandingPage';

function App(){
  return <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          
        </Routes>
      </BrowserRouter> 

  </div>

}

export default App;
