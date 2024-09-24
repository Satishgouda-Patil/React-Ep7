import React from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
const AppLayout=()=>{
    return (
        <div className="app">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about", 
          element: <About />,
        },
        {
          path: "/contact", 
          element: <Contact />,
        },
        {
          path: "/restaurant/:id", 
          element: <Restaurant />,
        },
      ],
    },
  ]);
  


const main=reactDom.createRoot(document.getElementById("main"));
main.render(<RouterProvider router={router}/>)
//         <div>
//             <h2>Hello</h2>
//             <ul>
//                 <li>list1</li>
//                 <li>list2</li>
//                 <li>list3</li>
//                 <li>list4</li>
//             </ul>
//             <table>
//                 <thead>
//                     <td> data 1 </td>
//                     <td> data 2 </td>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>value 1</td>
//                         <td>value 2</td>
//                     </tr>
//                     <tr>
//                         <td>value 1</td>
//                         <td>value 2</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )


// //creating fn element in react using function way 
// //Note: name should begin with caps
// const data=1000;

// const Title=() => (
//     <h1>headline 1</h1>
// )

// const ReactEle= () => (
//     <div>
//         {<Title/>}
//         <h1>hi</h1>
//     </div>
// )

// const nav=reactDom.createRoot(document.getElementById("nav"));
// const body=reactDom.createRoot(document.getElementById("body"));
// const footer=reactDom.createRoot(document.getElementById("footer"));

// const NavBar=() => (
//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
// )

// const Body=() => (
//     <div>
//         <h1>body</h1>
//         <p>abuot img</p>
//     </div>
// )

// const Footer=() => (
//     <Footer>
//         <p>Made by ❤️🚀 </p>
//         <p>Satishgouda</p>
//     </Footer>
// )

// nav.render(<NavBar/>) 