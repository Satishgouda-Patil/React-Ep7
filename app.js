import React from "react";
var reactDom=require("react-dom/client");
//jsx
const jsx=(
        <div>
            <h2>Hello</h2>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
            </ul>
            <table>
                <thead>
                    <td> data 1 </td>
                    <td> data 2 </td>
                </thead>
                <tbody>
                    <tr>
                        <td>value 1</td>
                        <td>value 2</td>
                    </tr>
                    <tr>
                        <td>value 1</td>
                        <td>value 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


//creating element in react using function way 
//Note: name should begin with caps
const data=1000;
const Title=() => (
    <h1>headline 1</h1>
)
const ReactEle= () => (
    <div>
        {<Title/>}
        <h1>hi</h1>
    </div>
)

console.log(ReactEle)
const root=reactDom.createRoot(document.getElementById("root"));

root.render(<ReactEle/>)