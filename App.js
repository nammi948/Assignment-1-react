import React from "react";
import ReactDom from "react-dom";

var react=React.createElement("h1",{},"helloreact");
var root = React.createElement(document.getElementById(root));

var htmlroot=document.getElementById("root");
var rootReact=ReactDom.createroot(htmlroot);

rootReact.render(react);