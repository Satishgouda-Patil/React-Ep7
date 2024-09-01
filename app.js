import React from "react";
var reactDom=require("react-dom/client");

const insert=React.createElement("div",{className:"parent"},[
    React.createElement("h1",{className:"text"},"this text 1"),
    React.createElement("h2",{className:"text"},"this text 2"),
    React.createElement("div",{className:"subroot"},[
        React.createElement("p",{className:"text"},[
            React.createElement("h3",{},"welcome to react 🚀❤️"),
            React.createElement("h4",{},"it's just a biginning 🤨")
        ]),
    ]),
   ]

)
const root=reactDom.createRoot(document.getElementById("root"));
const root2=reactDom.createRoot(document.getElementById("root2"));

root.render(insert);
root2.render(insert);
