import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./Header.js";
import Hero from "./Hero.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
var reactRoot = createRoot(document.getElementById("main-container"));
const App =() =>{
    return(
        <>
        <Header/>
        <Hero/> 
        <Body/>
        <Footer/>
        </>
    );
};
reactRoot.render(<App/>); 
